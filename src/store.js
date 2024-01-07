import { createStore } from "redux";

let initialState = {
  balance: 0,
  fullName: "",
  mobileNo: null,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "deposit":
      return { ...state, balance: state.balance + +action.payload };
    case "withdraw":
      return { ...state, balance: state.balance - +action.payload };
    case "updateName":
      return { ...state, fullName: action.payload };

    case "mobile":
      return { ...state, mobileNo: action.payload };
    case "reset":
      return initialState;

    default:
      return state;
  }
}

const store = createStore(reducer);
export default store;
// console.log(store.getState(), "Initial");

// store.dispatch({ type: "deposit", payload: 1000 });
// console.log(store.getState(), "deposit");

// store.dispatch({ type: "withdraw", payload: 500 });
// console.log(store.getState(), "withdraw");

// store.dispatch({ type: "updateName", payload: "Daram" });
// console.log(store.getState(), "updateName");

// store.dispatch({ type: "mobile", payload: 9505544910 });
// console.log(store.getState(), "mobile");
