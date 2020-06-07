export const incrementActionCreator = () => {
  return {
    type: "iniInc",
    payload: "suprabh",
  };
};

export const decrementActionCreator = () => {
  return {
    type: "dec",
  };
};

export const onAddActionCreator = (value: number) => {
  return {
    type: "add",
    payload: {
      by: value,
    },
  };
};

export const onSubtractActionCreator = (value: number) => {
  return {
    type: "sub",
    payload: {
      by: value,
    },
  };
};
