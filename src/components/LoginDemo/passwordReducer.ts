type PasswordType = { value: string; isValid: boolean | null };

type PasswordAction =
  | {
      type: "SET_PASSWORD";
      value: string;
    }
  | {
      type: "SET_PASSWORD_VALIDITY";
      isValid: boolean | null;
    };

export const passwordReducer = (
  state: PasswordType,
  action: PasswordAction
) => {
  switch (action.type) {
    case "SET_PASSWORD":
      return {
        ...state,
        value: action.value,
      };
    case "SET_PASSWORD_VALIDITY":
      return {
        ...state,
        isValid: action.isValid,
      };
    default:
      return state;
  }
};
