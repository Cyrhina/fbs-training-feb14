import React from "react";
import { FcSimCardChip } from "react-icons/fc";
import { RiDeleteBinLine, RiEdit2Fill, RiEdit2Line } from "react-icons/ri";
import { FaCcPaypal, FaCcMastercard, FaCcVisa } from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";
import { BsPlusLg } from "react-icons/bs";
import ModalEditCard from "./ModalEditCard.js";
import ModalEditInfo from "./ModalEditInfo.js";
import SpinnerTable from "../../../widgets/SpinnerTable.js";

import { StoreContext } from "../../../../store/StoreContext.js";
import { setIsAdd, setIsConfirm } from "../../../../store/StoreAction.js";
import ModalConfirm from "../../modal/ModalConfirm.js";

const AccountInfo = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);
  const [id, setId] = React.useState(null);
  const [isDel, setDel] = React.useState(false);

  const handleAdd = () => {
    dispatch(setIsAdd(true));
    setItemEdit(null);
  };
  const handleEdit = (itemEdit) => {
    dispatch(setIsAdd(true));
    setItemEdit(itemEdit);
  };

  const handleDelete = (item) => {
    dispatch(setIsConfirm(true));
    setItemEdit(itemEdit);
    setDel(true);
    setId("");
  };

  return (
    <>
      <div className="donor">
        <div className="donor__block donor--information">
          <div className="donor__block__header">
            <h3>Personal Information</h3>
            <button>
              <RiEdit2Fill /> Edit
            </button>
          </div>

          <div className="donor__block__body">
            <div className="grid-2">
              <div className="info__group">
                <h4>First Name</h4>
                <p>asd</p>
              </div>
              <div className="info__group">
                <h4>Last Name</h4>
                <p>asd</p>
              </div>
            </div>

            <div className="info__group">
              <h4>Email</h4>
              <p>asd</p>
            </div>
          </div>
        </div>

        <div className="donor__block donor--card">
          <div className="donor__block__header">
            <h3>Card Information</h3>
            <div className="action__icon">
              <ul>
                <li>
                  <button
                    data-tooltip="Edit"
                    className="icon icon--edit"
                    onClick={handleEdit}
                  >
                    <RiEdit2Line />
                  </button>
                </li>
                <li>
                  <button
                    data-tooltip="Delete"
                    className="icon icon--delete"
                    onClick={handleDelete}
                  >
                    <RiDeleteBinLine />
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="donor__block__body">
            <div className="credit__card__list">
              <div className="card">
                <div className="card__wrapper">
                  <div className="card__icon">
                    <FcSimCardChip />
                  </div>

                  <div className="card__group card--number">
                    <h5>Card Number</h5>
                    <p>**** **** **** 4311</p>
                  </div>
                  <div className="card__group card--name">
                    <h5>Cardholder Name</h5>
                    <p>Loverboy Lover</p>
                  </div>
                  <div className="card__meta d--flex">
                    <div className="d--flex">
                      <div className="card__group">
                        <h5>Expiration</h5>
                        <p>11/22</p>
                      </div>

                      <div className="card__group">
                        <h5>CVC</h5>
                        <p>112</p>
                      </div>
                    </div>
                    <div className="card__group">
                      <ul>
                        <li>
                          <FaCcVisa />
                        </li>

                        <li>
                          <FaCcMastercard />
                        </li>
                        <li>
                          <SiAmericanexpress />
                        </li>
                        <li>
                          <FaCcPaypal />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* add card */}
              <div className="card card--add">
                <button className="card__btn" onClick={handleAdd}>
                  <BsPlusLg />
                  <h2>Add Card</h2>
                </button>
              </div>

              <div className="card card--spinner">
                <SpinnerTable />
              </div>
            </div>
          </div>
        </div>
        {store.isAdd && <ModalEditCard />}
        {store.isConfirm && (
          <ModalConfirm
            id={id}
            isDel={isDel}
            // stripeApiDelete="/server/stripe/products/delete-product.php"
            // stripeApiArchive="/server/stripe/products/archive-product.php"
            // mysqlApiDelete="/admin/projects/delete-projects.php"
            // mysqlApiArchive="/admin/projects/archive-projects.php"
            msg={
              isDel
                ? "Are you sure you want to delete "
                : "Are you sure you want to archive "
            }
            item={""}
          />
        )}
      </div>
    </>
  );
};

export default AccountInfo;
