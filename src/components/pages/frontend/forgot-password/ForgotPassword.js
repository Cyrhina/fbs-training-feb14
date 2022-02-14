import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
//import { StoreContext } from "../../../store/StoreContext.js";
import { devNavUrl } from "../../../helpers/functions-general.js";
//import SpinnerBtn from "../../widgets/SpinnerBtn.js";
import { InputText } from "../../../helpers/FormInputs.js";
// import { fetchData } from "../../helpers/fetchData.js";
// import { setForgotPass } from "../../../store/StoreAction.js";
// import ModalError from "../../modal/ModalError.js";
// import { useNavigate } from "react-router";

const ForgotPassword = () => {
  // const { store, dispatch } = React.useContext(StoreContext);
  // const [loading, setLoading] = React.useState(false);
  // const navigate = useNavigate();

  // React.useEffect(() => {
  //   // redirect to login if success
  //   dispatch(setForgotPass(true));
  // }, []);

  const initVal = {
    //  donor_email: "",
  };

  const yupSchema = Yup.object({
    //donor_email: Yup.string().email("Email is invalid").required("Required"),
  });

  return (
    <>
      <div className="login">
        <div className="login__main ">
          <Formik
            initialValues={initVal}
            validationSchema={yupSchema}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
              // console.log(values);
              // fetchData(
              //   setLoading,
              //   "/donor/account/update-account-forgot-pass.php",
              //   values, // form data values
              //   null, // result set data
              //   "", // success msg
              //   "", // additional error msg if needed
              //   dispatch, // context api action
              //   store, // context api state
              //   true, // boolean to show success modal
              //   false, // boolean to show load more functionality button
              //   navigate
              // );
            }}
          >
            {(props) => {
              // console.log(props.isSubmitting);

              return (
                <Form className="login__form">
                  <div>
                    <div className="login__header">
                      <figure>
                        <img src="../images/logo.png" alt="Main Logo" />
                      </figure>
                    </div>

                    <div className="login__welcome">
                      <h3>Forgot Password</h3>
                      <p>Provide email to continue</p>
                    </div>

                    <div className="login__body">
                      <div className="logInput__wrap form__group">
                        <InputText
                          label="Email Address"
                          type="email"
                          name="donor_email"
                          // disabled={loading}
                        />
                      </div>

                      <div className="logInput__wrap">
                        <button
                          type="submit"
                          //  disabled={loading}
                        >
                          Submit
                          {/* {loading && <SpinnerBtn />} */}
                        </button>
                      </div>
                    </div>
                    <div className="login__footer">
                      <Link to={`${devNavUrl}/login`}>Go back to login</Link>
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

export default ForgotPassword;
