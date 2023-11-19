import { useState } from "react";
import "./LoginPage.scss";

import { LoginScreen } from "../../interfaces/Login";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";

const LoginPage = () => {
  const [loginScreen, setLoginScreen] = useState<LoginScreen>(LoginScreen.SignIn);

  return (
    <div className="login-container">
      {loginScreen === LoginScreen.SignIn ? (
        <SignIn setLoginScreen={setLoginScreen} />
      ) : (
        <SignUp setLoginScreen={setLoginScreen} />
      )}
    </div>
  );
};

export default LoginPage;
