import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { devNavUrl } from "../../../helpers/functions-general.js";
// import SpinnerBtn from "../../widgets/SpinnerBtn.js";
const CreateSuccess = () => {
  return (
    <>
      <div className="login">
        <div className="login__main ">
          <form action="" className="login__form">
            <div>
              <div className="login__header">
                <figure>
                  <FaRegCheckCircle />
                </figure>
              </div>

              <div className="login__welcome text--center">
                <h3>Success!</h3>
              </div>

              <article className="login__content">
                <p>
                  Congratulations, your password has been successfully created.
                </p>
                <Link to={`${devNavUrl}/login`}>Proceed to Login</Link>
              </article>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateSuccess;
