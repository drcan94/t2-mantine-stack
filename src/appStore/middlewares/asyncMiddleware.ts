export const asyncMiddleware = ({ dispatch, getState }: any) => {
  return (next: any) => (action: any) => {
    if (typeof action === "function") {
      if (action.length === 2) {
        // The action function takes getState as the second argument
        return action(dispatch, getState);
      } else {
        // The action function doesn't take getState as an argument
        return action(dispatch);
      }
    }
    return next(action);
  };
};
