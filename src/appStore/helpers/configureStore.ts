// appStore/helpers/configureStore.ts
import { asyncMiddleware } from "../middlewares/asyncMiddleware";

interface ConfiguredStore<S, A extends { type: string }> {
  reducer: (state: S | undefined, action: A) => S;
  preloadedState?: S;
  middlewares?: Array<(api: MiddlewareAPI<S, A>) => (next: Dispatch<A>) => (action: A) => A>;
}

interface MiddlewareAPI<S, A extends { type: string }> {
  getState: () => S;
  dispatch: Dispatch<A>;
}

type Dispatch<A extends { type: string }> = (action: A) => A;

export const configureStore = <S, A extends { type: string }>({
  reducer,
  preloadedState,
  middlewares = [],
}: ConfiguredStore<S, A>) => {
  const store = {
    _state: preloadedState || reducer(undefined, { type: "" } as A),
    getState: () => store._state,
    dispatch: (action: A): A => {
      if (typeof action === "function") {
        return (action as (dispatch: Dispatch<A>, getState: () => S) => A)(store.dispatch, store.getState); // Cast 'action' to the correct function type
      }

      const middlewareAPI: MiddlewareAPI<S, A> = {
        getState: store.getState,
        dispatch: (action: A): A => store.dispatch(action),
      };

      const chain = [...middlewares, asyncMiddleware].map((middleware) =>
        middleware(middlewareAPI)
      );

      const composedMiddleware = chain.reduceRight(
        (next: Dispatch<A>, middleware) => {
          return middleware(next);
        },
        (action: A) => {
          store._state = reducer(store._state, action);
          return action;
        }
      );

      return composedMiddleware(action);
    },
  };

  return store;
};
