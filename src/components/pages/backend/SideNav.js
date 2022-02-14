import React from "react";

import { NavLink } from "react-router-dom";
import { MdOutlineChildCare, MdOutlineManageAccounts } from "react-icons/md";
import { devNavUrl } from "../../helpers/functions-general.js";
import CompanyLogo from "../../svg/CompanyLogo.js";

// import { devNavUrl } from "../helpers/functions-general";
// import CompanyLogo from "../svg/CompanyLogo";

const SideNav = ({ isTab }) => {
  return (
    <>
      <aside className="sidenav">
        <div className="sidenav__wrapper">
          <header className="sidenav__header">
            <CompanyLogo />
          </header>

          <main className="sidenav__main">
            <ul>
              <li>
                <NavLink
                  to={`${devNavUrl}/sponsorship-active`}
                  className={isTab ? "active" : ""}
                >
                  <MdOutlineChildCare />
                  <span>Sponsorship</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`${devNavUrl}/account`}
                  className={(navData) => (navData.isActive ? "active" : "")}
                >
                  <MdOutlineManageAccounts />
                  <span>Account</span>
                </NavLink>
              </li>
            </ul>
          </main>
        </div>
      </aside>
    </>
  );
};

export default SideNav;
