// appStore/helpers/combineReducers.ts
export interface GenericAction {
  type: string;
}
export type ActionWithPayload<P> = GenericAction & { payload: P };


type ReducersMapObject<S, A extends { type: string }> = {
  [K in keyof S]: (state: S[K] | undefined, action: A) => S[K];

};
export const combineReducers = <S extends Record<string, unknown>, A extends GenericAction>(
  reducers: ReducersMapObject<S, A>
): ((state: S | undefined, action: A) => S) => {
  const initialState: S = Object.keys(reducers).reduce(
    (initial, key) => {
      const reducer = reducers[key as keyof S];
      initial[key as keyof S] = reducer(undefined, {} as A);
      return initial;
    },
    {} as S
  );

  return (state: S | undefined = initialState, action: A) => {
    return Object.keys(reducers).reduce((nextState: S, key: keyof S) => {
      nextState[key] = reducers[key](state?.[key], action);
      return nextState;
    }, {} as S);
  };
};
