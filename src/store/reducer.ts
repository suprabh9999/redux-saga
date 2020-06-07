const initialState = { counter: 0, title: "", errorMsg: "" };

export const reducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case "inc":
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "dec":
      return {
        ...state,
        counter: state.counter - 1,
      };
    case "add":
      return {
        ...state,
        counter: state.counter + action.payload.by,
      };
    case "sub":
      return {
        ...state,
        counter: state.counter - action.payload.by,
      };
    case "user":
      return {
        ...state,
        title: action.payload.title,
      };
    case "userError":
      return {
        ...state,
        errorMsg: action.payload,
      };
    default:
      return state;
  }
};
