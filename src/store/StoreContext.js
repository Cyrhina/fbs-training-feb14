import React from "react";
import { StoreReducer } from "./StoreReducer";

const initVal = {
  error: false,
  message: "",
  success: false,
  isSave: false,
  isConfirm: false,
  isAdd: false,
  isSearch: false,
  startIndex: 0,
  isDonate: false,
  isSponsor: false,
  isDonorSignUp: false,
  isCreatePass: false,
  isForgotPassword: false,
  isLogin: false,
  isLogout: false,
  credentials: {
    donor_cus_id: "",
    donor_fname: "",
    donor_lname: "",
    donor_email: "",
  },
};

const StoreContext = React.createContext();

const StoreProvider = (props) => {
  const [store, dispatch] = React.useReducer(StoreReducer, initVal);

  return (
    <StoreContext.Provider value={{ store, dispatch }}>
      {props.children}
    </StoreContext.Provider>
  );
};

export { StoreContext, StoreProvider };
