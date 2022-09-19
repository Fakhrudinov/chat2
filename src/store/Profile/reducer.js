import { CHECKBOX_ACTION } from "./constants";

const initialState = {
  isChecked: false,
  message: "Отмечен",
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECKBOX_ACTION: {
      return { ...state, isChecked: !state.isChecked};
    }
    default:
      return state;
  }
};
