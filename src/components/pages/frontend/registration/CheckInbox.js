import React from "react";
import { Link } from "react-router-dom";
import { devNavUrl } from "../../../helpers/functions-general.js";

import { FaRegCheckCircle } from "react-icons/fa";
const CheckInbox = () => {
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
                <p>Please check your email to continue using your account.</p>
                <Link to={`${devNavUrl}/login`}>Go back to login</Link>
              </article>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CheckInbox;
