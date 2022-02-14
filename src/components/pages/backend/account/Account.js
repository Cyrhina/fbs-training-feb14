import React from "react";
import Header from "../Header.js";
import SideNav from "../SideNav.js";
import AccountInfo from "./AccountInfo.js";

const Account = () => {
  return (
    <section className="parentbox">
      <div className="parentbox__wrapper">
        <SideNav />
        <div className="parentbox__main">
          <Header title="Donor Account" />
          <AccountInfo />
        </div>
      </div>
    </section>
  );
};

export default Account;
