import React from "react";
import "./app.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Account from "./components/pages/backend/account/Account";
import { devNavUrl } from "./components/helpers/functions-general";

import SponsorshipActive from "./components/pages/backend/sponsorship/active/SponsorshipActive";
import SponsorshipCancelled from "./components/pages/backend/sponsorship/cancelled/SponsorshipCancelled";
import CreateAccount from "./components/pages/frontend/registration/CreateAccount";
import CreatePassword from "./components/pages/frontend/registration/CreatePassword";
import CreateSuccess from "./components/pages/frontend/registration/CreateSuccess.js";
import WelcomeAboard from "./components/pages/frontend/registration/WelcomeAboard.js";
import ForgotPassword from "./components/pages/frontend/forgot-password/ForgotPassword.js";
import ForgotPasswordSuccess from "./components/pages/frontend/forgot-password/ForgotPasswordSuccess.js";
import ForgotPasswordVerification from "./components/pages/frontend/forgot-password/ForgotPasswordVerification.js";
import { StoreProvider } from "./store/StoreContext.js";
function App() {
  return (
    <StoreProvider>
      <Router>
        <Routes>
          <Route path={`${devNavUrl}/account`} element={<Account />} />
          <Route
            path={`${devNavUrl}/sponsorship-active`}
            element={<SponsorshipActive />}
          />
          <Route
            path={`${devNavUrl}/sponsorship-cancelled`}
            element={<SponsorshipCancelled />}
          />

          <Route
            path={`${devNavUrl}/create-account`}
            element={<CreateAccount />}
          />

          <Route
            path={`${devNavUrl}/create-password`}
            element={<CreatePassword />}
          />

          <Route
            path={`${devNavUrl}/create-success`}
            element={<CreateSuccess />}
          />

          <Route
            path={`${devNavUrl}/welcome-aboard`}
            element={<WelcomeAboard />}
          />

          <Route
            path={`${devNavUrl}/forgot-password`}
            element={<ForgotPassword />}
          />

          <Route
            path={`${devNavUrl}/forgot-password-success`}
            element={<ForgotPasswordSuccess />}
          />

          <Route
            path={`${devNavUrl}/forgot-password-verification`}
            element={<ForgotPasswordVerification />}
          />
        </Routes>
      </Router>
    </StoreProvider>
  );
}

export default App;
