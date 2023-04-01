import { asyncMiddleware } from "../middlewares/asyncMiddleware";

interface ConfiguredStore {
  reducer: any;
  preloadedState?: any;
  middlewares?: any[];
}

export const configureStore = ({
  reducer,
  preloadedState,
  middlewares = [],
}: ConfiguredStore) => {
  const store = {
    _state: preloadedState || reducer(undefined, { type: "" }),
    getState: () => store._state,
    dispatch: (action: any) => {
      if (typeof action === "function") {
        return action(store.dispatch, store.getState);
      }

      const middlewareAPI = {
        getState: store.getState,
        dispatch: (action: any) => store.dispatch(action),
      };

      const chain = [...middlewares, asyncMiddleware].map((middleware) =>
        middleware(middlewareAPI)
      );

      const composedMiddleware = chain.reduceRight(
        (next, middleware) => {
          return middleware(next);
        },
        (action: any) => {
          store._state = reducer(store._state, action);
          return action;
        }
      );

      return composedMiddleware(action);
    },
  };

  return store;
};
