import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { BsPlus } from "react-icons/bs";
import { RiCamera3Line } from "react-icons/ri";

import {
  InputFileUpload,
  InputText,
  MyTextArea,
} from "../../../../helpers/FormInputs.js";
// import useUploadPhoto from "../../../../custom-hooks/useUploadPhoto";
// import { devApiUrl, devBaseUrl } from "../../../../helpers/functions-general";
// import fetchApi from "../../../../helpers/fetchApi";
// import { checkStripeError } from "../../../../helpers/stripe-error";
// import SpinnerBtn from "../../../../widgets/SpinnerBtn";
// import { fetchData } from "../../../../helpers/fetchData";

const ModalAddSponsorship = ({ item }) => {
  // const { store, dispatch } = React.useContext(StoreContext);
  // const [loading, setLoading] = React.useState(false);
  // const { itemEdit, setItemEdit } = item;

  // const handleClose = () => {
  //   dispatch(setIsAdd(false));
  // };

  // const { uploadPhoto, handleChangePhoto, photo } = useUploadPhoto(
  //   "/admin/gendonation/upload-photo.php",
  //   dispatch
  // );

  const initVal = {
    // genDonation_id: itemEdit ? itemEdit.genDonation_id : "",
    // genDonation_name: itemEdit ? itemEdit.genDonation_name : "",
    // genDonation_description: itemEdit ? itemEdit.genDonation_description : "",
    // genDonation_amount: itemEdit ? itemEdit.genDonation_amount : "",
    // genDonation_photo: itemEdit ? itemEdit.genDonation_photo : "np.jpg",
  };

  const yupSchema = Yup.object({
    // genDonation_name: Yup.string().required("Required"),
    // genDonation_description: Yup.string().required("Required"),
    // genDonation_amount: Yup.string().required("Required"),
    // genDonation_photo: Yup.string().required("Required"),
  });

  return (
    <>
      <div className="dashmodal">
        <div className="dashmodal__main">
          <div className="dashmodal__header bg--primary">
            <h2>asdas</h2>
            <button className="modaldashClose">
              <BsPlus />
            </button>
          </div>

          <div className="dashmodal__body ">
            <Formik
              initialValues={initVal}
              validationSchema={yupSchema}
              // value = initVal = state
              onSubmit={async (values, { setSubmitting, resetForm }) => {
                console.log(values);
                // setLoading(true);
                // uploadPhoto();
                // const data = await fetchApi(
                //   itemEdit
                //     ? devApiUrl + "/server/stripe/products/update-product.php"
                //     : devApiUrl + "/server/stripe/products/create-product.php",
                //   values
                // );
                // console.log(data);

                // // if result data is undefined
                // if (typeof data === "undefined") {
                //   dispatch(setError(true));
                //   dispatch(setMessage("API / Network Error"));
                //   setLoading(false);
                //   return;
                // }

                // if (data.type === "good") {
                console.log("Success");
                // insert to mysql
                // fetchData(
                //   setLoading,
                //   itemEdit
                //     ? "/admin/gendonation/update-gen-donation.php"
                //     : "/admin/gendonation/create-gen-donation.php",
                //   {
                //     ...values,
                //     //genDonation_id: data.id,

                //     project_photo: photo
                //       ? photo.name
                //       : itemEdit
                //       ? itemEdit.genDonation_photo
                //       : "np.jpg",
                //   }, // form data values
                //   null, // result set data
                //   "", // success msg
                //   "", // additional error msg if needed
                //   dispatch, // context api action
                //   store, // context api state
                //   false, // boolean to show success modal
                //   false // boolean to show load more functionality button
                // );
                // } else {
                //   console.log("Error");
                //   // Show error message
                //   checkStripeError(data.error, dispatch);
                //   setLoading(false);
                // }
              }}
            >
              {(props) => {
                // console.log(props.isSubmitting);

                return (
                  <Form action="" className="dashmodal__form">
                    <div className="form__group input--upload">
                      <label htmlFor="upload-photo">
                        <RiCamera3Line />
                      </label>

                      <img
                        // src={
                        //   photo
                        //     ? URL.createObjectURL(photo)
                        //     : itemEdit !== null
                        //     ? devBaseUrl +
                        //       "/images/" +
                        //       itemEdit.genDonation_photo
                        //     : "../../images/child_placeholder.jpg"
                        // }
                        alt="default avatar"
                      />
                      {/* 
                      <InputFileUpload
                        type="file"
                        name="photo"
                        accept="image/*"
                        onChange={handleChangePhoto}
                        id="upload-photo"
                      /> */}
                      <small>Max file size 60kb</small>
                    </div>

                    <div className="form__group">
                      <InputText
                        label="Name"
                        type="text"
                        name="genDonation_name"
                        // disabled={loading}
                      />
                    </div>
                    <div className="form__group">
                      <MyTextArea
                        label="Description"
                        name="genDonation_description"
                        cols="30"
                        rows="10"
                        // disabled={loading}
                      ></MyTextArea>
                    </div>

                    <div className="form__group">
                      <InputText
                        label="Amount Limit"
                        type="text"
                        name="genDonation_amount"
                        // disabled={loading}
                      />
                    </div>
                    <div className="dashmodal__footer">
                      <ul>
                        <li>
                          <button
                            type="submit"
                            className="dashmodal__btn btn--primary"
                            // disabled={loading}
                          >
                            {/* {itemEdit ? "Save" : "Add"}{" "}
                            {loading && <SpinnerBtn />} */}
                            Save
                          </button>
                        </li>
                        <li>
                          <button
                            type="reset"
                            className="dashmodal__btn btn--gray"
                            // onClick={handleClose}
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

export default ModalAddSponsorship;
