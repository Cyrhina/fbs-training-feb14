export const setError = (val) => {
  return {
    type: "ERROR",
    payload: val,
  };
};

export const setMessage = (val) => {
  return {
    type: "MESSAGE",
    payload: val,
  };
};

export const setSuccess = (val) => {
  return {
    type: "SUCCESS",
    payload: val,
  };
};

export const setSave = (val) => {
  return {
    type: "SAVE",
    payload: val,
  };
};

export const setIsConfirm = (val) => {
  return {
    type: "CONFIRM",
    payload: val,
  };
};

//#4 check if is_add is on reducer - go to reducer
export const setIsAdd = (val) => {
  return {
    type: "IS_ADD",
    payload: val,
  };
};

export const setIsSearch = (val) => {
  return {
    type: "IS_SEARCH",
    payload: val,
  };
};

export const setStartIndex = (val) => {
  return {
    type: "START_INDEX",
    payload: val,
  };
};

export const setIsDonate = (val) => {
  return {
    type: "IS_DONATE",
    payload: val,
  };
};

export const setIsSponsor = (val) => {
  return {
    type: "IS_SPONSOR",
    payload: val,
  };
};

export const setIsDonorSignUp = (val) => {
  return {
    type: "IS_DONOR_SIGNUP",
    payload: val,
  };
};

export const setCreatePass = (val) => {
  return {
    type: "IS_CREATE_PASS",
    payload: val,
  };
};

export const setForgotPass = (val) => {
  return {
    type: "IS_FORGOT_PASS",
    payload: val,
  };
};

export const setIsLogin = (val) => {
  return {
    type: "IS_LOGIN",
    payload: val,
  };
};

export const setIsLogout = (val) => {
  return {
    type: "IS_LOGOUT",
    payload: val,
  };
};

export const setCredentials = (
  donor_cus_id,
  donor_fname,
  donor_lname,
  donor_email
) => {
  return {
    type: "CREDENTIALS",
    payload: { donor_cus_id, donor_fname, donor_lname, donor_email },
  };
};
