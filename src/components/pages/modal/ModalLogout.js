import React from "react";
import { RiLogoutBoxLine } from "react-icons/ri";
import { BsPlus } from "react-icons/bs";

import { StoreContext } from "../../../store/StoreContext";
import { setIsLogout } from "../../../store/StoreAction";
import SpinnerBtn from "../../widgets/SpinnerBtn.js";
import { devNavUrl } from "../../helpers/functions-general";
const ModalLogout = () => {
  const { dispatch } = React.useContext(StoreContext);

  const handleClose = (e) => {
    e.preventDefault();
    dispatch(setIsLogout(false));
  };

  const handleYes = () => {
    // localStorage.removeItem("fcadontoken");
    // window.location.replace(`${devNavUrl}/login`);
  };

  return (
    <>
      <div className="dashmodal modal--logout">
        <div className="dashmodal__main">
          <div className="dashmodal__header bg--warning">
            <h2>Logout</h2>
            <button className="modaldashClose" onClick={handleClose}>
              <BsPlus />
            </button>
          </div>

          <div className="dashmodal__body fixed--height  ">
            <p className="text--center dashmodal__body__msg ">
              <span className="dashmodal__body__icon ">
                <RiLogoutBoxLine />
              </span>
              Are you sure you want to logout?
            </p>

            <div className="dashmodal__footer">
              <ul>
                <li>
                  <button
                    className="dashmodal__btn bg--warning text--light"
                    onClick={handleYes}
                  >
                    Okay
                  </button>
                </li>
                <li>
                  <button
                    className="dashmodal__btn btn--gray"
                    onClick={handleClose}
                  >
                    Cancel
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalLogout;
