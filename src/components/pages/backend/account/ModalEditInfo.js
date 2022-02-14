import React from "react";
import { BsPlus } from "react-icons/bs";
import { InputText } from "../../../helpers/FormInputs.js";
import { Formik, Form } from "formik";
import * as Yup from "yup";
const ModalEditInfo = ({ action }) => {
  const handleClose = () => action(false);
  const initVal = {
    // product: itemEdit ? itemEdit.child_id : "",
    // product_name: itemEdit ? itemEdit.child_name : "",
    // product_description: itemEdit ? itemEdit.child_description : "",
    // product_amount: itemEdit ? itemEdit.child_amount : "",
    // // child_photo: itemEdit ? itemEdit.child_photo : "np.jpg",
  };

  const yupSchema = Yup.object({
    // product_name: Yup.string().required("Required"),
    // product_description: Yup.string().required("Required"),
    // product_amount: Yup.string().required("Required"),
    // child_photo: Yup.string().required("Required"),
  });
  return (
    <div className="dashmodal">
      <div className="dashmodal__main">
        <div className="dashmodal__header bg--primary">
          <h2>Update Information</h2>
          <button className="modaldashClose" onClick={() => handleClose()}>
            <BsPlus />
          </button>
        </div>

        <div className="dashmodal__body ">
          <Formik
            // initialValues={initVal}
            // validationSchema={yupSchema}
            // value = initVal = state
            onSubmit={async (values, { setSubmitting, resetForm }) => {
              // console.log(values);
              // setLoading(true);
              // uploadPhoto();
              // // stripe api
              // const data = await checkProducts(
              //   itemEdit,
              //   values,
              //   dispatch,
              //   setLoading
              // );
              // if (data.type === "good") {
              //   // insert to mysql
              //   fetchData(
              //     setLoading,
              //     itemEdit
              //       ? "/admin/children/update-children.php"
              //       : "/admin/children/create-children.php",
              //     {
              //       ...values,
              //       product_id: data.id,
              //       product_photo: photo
              //         ? photo.name
              //         : itemEdit
              //         ? itemEdit.child_photo
              //         : "np.jpg",
              //     }, // form data values
              //     null, // result set data
              //     "", // success msg
              //     "", // additional error msg if needed
              //     dispatch, // context api action
              //     store, // context api state
              //     false, // boolean to show success modal
              //     false // boolean to show load more functionality button
              //   );
              // }
            }}
          >
            {(props) => {
              // console.log(props.isSubmitting);

              return (
                <Form action="" className="dashmodal__form">
                  <div className="form__group">
                    <InputText
                      label="First Name"
                      type="text"
                      name="product_name"
                      // disabled={loading}
                    />
                  </div>
                  <div className="form__group">
                    <InputText
                      label="Last Name"
                      type="text"
                      name="product_name"
                      // disabled={loading}
                    />
                  </div>

                  <div className="form__group">
                    <InputText
                      label="Email"
                      type="email"
                      name="product_name"
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
  );
};

export default ModalEditInfo;
