import React from "react";
import Header from "../../Header.js";
import SideNav from "../../SideNav.js";
import SponsorshipCancelledTable from "./SponsorshipCancelledTable.js";

const SponsorshipCancelled = () => {
  return (
    <>
      <section className="parentbox">
        <div className="parentbox__wrapper">
          <SideNav isTab="true" />
          <div className="parentbox__main">
            <Header title="Sponsorship" />
            <SponsorshipCancelledTable />
          </div>
        </div>
      </section>
    </>
  );
};

export default SponsorshipCancelled;
