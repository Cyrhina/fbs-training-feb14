import React from "react";
import SideNav from "../../SideNav.js";
import Header from "../../Header.js";
import SponsorshipActiveTable from "./SponsorshipActiveTable.js";

const SponsorshipActive = () => {
  return (
    <>
      <section className="parentbox">
        <div className="parentbox__wrapper">
          <SideNav isTab="true" />
          <div className="parentbox__main">
            <Header />
            <SponsorshipActiveTable />
          </div>
        </div>
      </section>
    </>
  );
};

export default SponsorshipActive;
