import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
// import SpinnerBtn from "../../widgets/SpinnerBtn.js";
import { InputText } from "../../../helpers/FormInputs.js";
// import { StoreContext } from "../../../store/StoreContext.js";
// import useLoadAll from "../../custom-hooks/useLoadAll.js";
// import { getUrlParam } from "../../helpers/functions-general.js";
// import { fetchData } from "../../helpers/fetchData.js";
// import {
//   setCreatePass,
//   setError,
//   setMessage,
// } from "../../../store/StoreAction.js";
// import ModalError from "../../modal/ModalError.js";
// import { useNavigate } from "react-router";

const CreatePassword = () => {
  // const { store, dispatch } = React.useContext(StoreContext);
  // const [btnLoading, setLoading] = React.useState(false);
  // const navigate = useNavigate();

  // const { loading, result } = useLoadAll(
  //   "/donor/account/read-account-key.php",
  //   getUrlParam().get("key")
  // );

  // React.useEffect(() => {
  //   // Modal success redirect
  //   dispatch(setCreatePass(true));
  // }, []);

  const initVal = {
    // donor_password: "",
    // donor_password_confirm: "",
    // donor_key: getUrlParam().get("key"),
  };

  const yupSchema = Yup.object({
    // donor_password: Yup.string().required("Required"),
    // donor_password_confirm: Yup.string().required("Required"),
  });

  // if (getUrlParam().get("key") === null || getUrlParam().get("key") === "") {
  //   return <p>The page you're trying to view has expired or invalid.</p>;
  // }

  return (
    <>
      <div className="login">
        <div className="login__main ">
          <Formik
            initialValues={initVal}
            validationSchema={yupSchema}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
              console.log(values);
              if (values.donor_password !== values.donor_password_confirm) {
                // dispatch(setError(true));
                // dispatch(setMessage("Your password did not match."));
                return;
              }

              //   fetchData(
              //     setLoading,
              //     "/donor/account/update-account-new-pass.php",
              //     values,
              //     null,
              //     "",
              //     "",
              //     dispatch,
              //     store,
              //     false,
              //     false,
              //     navigate
              //   );
            }}
          >
            {(props) => {
              // console.log(props.isSubmitting);

              return (
                <Form action="" className="login__form">
                  <div>
                    <div className="login__header">
                      <figure>
                        <img src="../images/logo.png" alt="Main Logo" />
                      </figure>
                    </div>

                    <div className="login__welcome">
                      <h3>Create Password</h3>
                      <p>Please provide new password</p>
                    </div>

                    <div className="login__body">
                      <div className="logInput__wrap form__group">
                        <InputText
                          label="New Password"
                          type="password"
                          name="donor_password"
                          // disabled={btnLoading}
                        />
                      </div>

                      <div className="logInput__wrap form__group">
                        <InputText
                          label="Confirm Password"
                          type="password"
                          name="donor_password_confirm"
                          // disabled={btnLoading}
                        />
                      </div>

                      <div className="logInput__wrap form__group">
                        <button
                          type="submit"
                          // disabled={btnLoading}
                        >
                          Submit
                          {/* {btnLoading && <SpinnerBtn />} */}
                        </button>
                      </div>
                    </div>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
      {/* {store.error && <ModalError />} */}
    </>
  );
};

export default CreatePassword;
