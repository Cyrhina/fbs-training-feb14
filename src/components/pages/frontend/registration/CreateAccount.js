import React from "react";
// import SpinnerBtn from "../../widgets/SpinnerBtn.js";
import { InputText } from "../../../helpers/FormInputs.js";
import { Form, Formik } from "formik";
import * as Yup from "yup";
// import { StoreContext } from "../../../store/StoreContext.js";
// import { fetchData } from "../../helpers/fetchData.js";
// import ModalError from "../../modal/ModalError.js";
// import { useNavigate } from "react-router";
// import { setIsDonorSignUp } from "../../../store/StoreAction.js";
import { devNavUrl } from "../../../helpers/functions-general.js";
import { Link } from "react-router-dom";

const CreateAccount = () => {
  // const { store, dispatch } = React.useContext(StoreContext);
  // const [loading, setLoading] = React.useState(false);
  // const navigate = useNavigate();

  // React.useEffect(() => {
  //   dispatch(setIsDonorSignUp(true));
  // }, []);

  const initVal = {
    // donor_fname: "",
    // donor_lname: "",
    // donor_email: "",
  };

  const yupSchema = Yup.object({
    // donor_fname: Yup.string().required("Required"),
    // donor_lname: Yup.string().required("Required"),
    // donor_email: Yup.string().email("Email is invalid").required("Required"),
  });

  return (
    <>
      <div className="login">
        <div className="login__main ">
          <Formik
            initialValues={initVal}
            validationSchema={yupSchema}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
              console.log(values);
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
              //     false,
              //     navigate // props optional
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
                      <h3>Create Account</h3>
                    </div>

                    <div className="login__body">
                      <div className="logInput__wrap form__group">
                        <InputText
                          label="First Name"
                          type="text"
                          name="donor_fname"
                          // disabled={loading}
                        />
                      </div>

                      <div className="logInput__wrap form__group">
                        <InputText
                          label="Last Name"
                          type="text"
                          name="donor_lname"
                          //disabled={loading}
                        />
                      </div>

                      <div className="logInput__wrap form__group">
                        <InputText
                          label="Email"
                          type="email"
                          name="donor_email"
                          //  disabled={loading}
                        />
                      </div>

                      <div className="logInput__wrap form__group">
                        <button
                          type="submit"
                          // disabled={loading}
                        >
                          Create Account
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

export default CreateAccount;
