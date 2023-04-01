export const combineReducers = (reducers: any) => {
  return (state: any = {}, action: any) => {
    return Object.keys(reducers).reduce((nextState: any, key: any) => {
      nextState[key] = reducers[key](state[key], action);
      return nextState;
    }, {});
  };
};
