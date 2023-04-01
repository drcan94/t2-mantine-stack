type EmailType = { value: string; isValid: boolean | null };

type EmailAction =
  | {
      type: "SET_EMAIL";
      value: string;
    }
  | {
      type: "SET_EMAIL_VALIDITY";
      isValid: boolean | null;
    };

export const emailReducer = (state: EmailType, action: EmailAction) => {
  switch (action.type) {
    case "SET_EMAIL":
      return {
        ...state,
        value: action.value,
      };
    case "SET_EMAIL_VALIDITY":
      return {
        ...state,
        isValid: action.isValid,
      };
    default:
      return state;
  }
};
