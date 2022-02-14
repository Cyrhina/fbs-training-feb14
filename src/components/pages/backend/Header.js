import React from "react";
import { IoMdLogOut } from "react-icons/io";

import ModalLogout from "../modal/ModalLogout";
function Header() {
  // const { store, dispatch } = React.useContext(StoreContext);

  // const handleLogout = () => {
  //   dispatch(setIsLogout(true));
  // };

  return (
    <>
      <header className="dashheader">
        <div className="dashheader__wrapper">
          <h2>asd</h2>
          <div className="dashheader__content">
            {/* {isAdmin == "true" ? (
              <div className="test__mode">
                <p>Test Mode</p>
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider"></span>
                </label>
              </div>
            ) : (
              ""
            )} */}

            <div className="dashheader__avatar">
              <div>
                <h3>Loverboy</h3>

                <small>Admin</small>
              </div>
              <button>
                <IoMdLogOut />
              </button>
            </div>
          </div>
        </div>
      </header>
      {/* {store.isLogout && <ModalLogout />} */}
    </>
  );
}

export default Header;
