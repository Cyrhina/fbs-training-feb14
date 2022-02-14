import React from "react";
import { BsPlus } from "react-icons/bs";
import { InputText } from "../../../helpers/FormInputs.js";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { StoreContext } from "../../../../store/StoreContext.js";
import { setIsAdd } from "../../../../store/StoreAction.js";

const ModalEditCard = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const handleClose = () => dispatch(setIsAdd(false));
  // const initVal = {
  //   donor_fname: "",
  //   donor_lname: "",
  //   donor_email: "",
  // };

  // const yupSchema = Yup.object({
  //   donor_fname: Yup.string().required("Required"),
  //   donor_lname: Yup.string().required("Required"),
  //   donor_email: Yup.string().required("Required"),
  // });
  return (
    <>
      <div className="dashmodal">
        <div className="dashmodal__main">
          <div className="dashmodal__header bg--primary">
            <h2>Update Card</h2>
            <button className="modaldashClose" onClick={handleClose}>
              <BsPlus />
            </button>
          </div>

          <div className="dashmodal__body ">
            <Formik
            // initialValues={initVal}
            // validationSchema={yupSchema}
            // onSubmit={async (values, { setSubmitting, resetForm }) => {
            //   fetchData(
            //     setLoading,
            //     "/donor/account/create-account.php",
            //     values,
            //     null,
            //     "",
            //     "",
            //     dispatch,
            //     store,
            //     false,
            //     false
            //   );
            // }}
            >
              {(props) => {
                // console.log(props.isSubmitting);

                return (
                  <Form action="" className="dashmodal__form">
                    <div className="form__group">
                      <InputText
                        label="Cardholder Name"
                        type="text"
                        name="product_amount"
                        // disabled={loading}
                      />
                    </div>
                    <div className="form__group">
                      <InputText
                        label="Card Number"
                        type="text"
                        name="product_amount"
                        // disabled={loading}
                      />
                    </div>

                    <div className="form__group">
                      <InputText
                        label="Expiry Month"
                        type="text"
                        name="product_amount"
                        // disabled={loading}
                      />
                    </div>

                    <div className="form__group">
                      <InputText
                        label="Expiry Year"
                        type="text"
                        name="product_amount"
                        // disabled={loading}
                      />
                    </div>

                    <div className="form__group">
                      <InputText
                        label="CVC"
                        type="text"
                        name="product_amount"
                        // disabled={loading}
                      />
                    </div>

                    <div className="form__group">
                      <InputText
                        label="Street"
                        type="text"
                        name="street"
                        // disabled={loading}
                      />
                    </div>

                    <div className="form__group">
                      <InputText
                        label="City"
                        type="text"
                        name="city"
                        // disabled={loading}
                      />
                    </div>

                    <div className="form__group">
                      <InputText
                        label="Zip/Postal"
                        type="text"
                        name="zip_postal"
                        // disabled={loading}
                      />
                    </div>

                    <div className="form__group">
                      <InputText
                        label="State/Province"
                        type="text"
                        name="state_province"
                        // disabled={loading}
                      />
                    </div>

                    <div className="form__group">
                      <InputText
                        label="Country"
                        type="text"
                        name="country"
                        // disabled={loading}
                      />
                    </div>
                    <div className="dashmodal__footer">
                      <ul>
                        <li>
                          <button
                            type="submit"
                            className="dashmodal__btn btn--primary"
                            //  disabled={loading}
                          >
                            Update
                          </button>
                        </li>
                        <li>
                          <button
                            type="reset"
                            className="dashmodal__btn btn--gray"
                            onClick={handleClose}
                          >
                            Cancel
                          </button>
                        </li>
                      </ul>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalEditCard;
