import React from "react";
import { BsPlusLg, BsThreeDotsVertical } from "react-icons/bs";
import { RiDeleteBinLine, RiEdit2Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { devNavUrl } from "../../../../helpers/functions-general.js";
import Footer from "../../Footer.js";
const SponsorshipCancelledTable = () => {
  return (
    <>
      <section className="datalist">
        <div className="datalist__container">
          <div className="datalist__header">
            <ul className="datalist__header__nav">
              <li>
                <NavLink
                  to={`${devNavUrl}/sponsorship-active`}
                  className={(navData) => (navData.isActive ? "active" : "")}
                >
                  Active
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`${devNavUrl}/sponsorship-cancelled`}
                  className={(navData) => (navData.isActive ? "active" : "")}
                >
                  Cancelled
                </NavLink>
              </li>
            </ul>
            <button className="btn--add">
              <BsPlusLg /> New Sponsorship
            </button>
          </div>
          <div className="datalist__wrapper">
            <div className="datalist__table">
              <table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Child Name</th>
                    <th>Amount </th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>1</td>
                    <td>adasd</td>
                    <td>$50.00</td>

                    <td className="action">
                      <div className="action__wrapper">
                        <button className="btn__option">
                          <BsThreeDotsVertical />
                        </button>
                        <ul>
                          <li>
                            <button>
                              <RiEdit2Line /> View
                            </button>
                          </li>
                          <li>
                            <button>
                              <RiDeleteBinLine />
                              Suspend
                            </button>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <Footer />
      </section>
      {/* {store.isAdd && <ModalAddGenDonation item={{ itemEdit, setItemEdit }} />}
      {store.error && <ModalError />}
      {store.isConfirm && (
        <ModalConfirm
          id={id}
          isDel={isDel}
          // stripeApiDelete="/server/stripe/products/delete-product.php"
          // stripeApiArchive="/server/stripe/products/archive-product.php"
          mysqlApiDelete="/admin/gendonation/delete-gen-donation.php"
          mysqlApiArchive="/admin/gendonation/archive-gen-donation.php"
          msg={
            isDel
              ? "Are you sure you want to delete "
              : "Are you sure you want to archive "
          }
          item={itemEdit.genDonation_name}
        />
      )} */}

      {/* <ModalViewSponsorship /> */}
    </>
  );
};

export default SponsorshipCancelledTable;
