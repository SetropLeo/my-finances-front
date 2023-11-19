import "./SignIn.scss";
import loginIcon from "../../../assets/login-icon.png";

import LoginPageContext from "../LoginPageContext";
import { InputLabel, Button, LoadingSpinner } from "../../../components";
import { LoginScreen } from "../../../interfaces/Login";

const SignIn = ({ setLoginScreen }: SignInProps) => {
  const { onChangeInput, onSubmitForm, formState, isLoading } = LoginPageContext();

  return (
    <>
      <div className="signin">
        <img src={loginIcon} alt="/" />
        <h2>Sign in to your account</h2>
      </div>

      <div className="form-container">
        <form action="#" className="form">
          <InputLabel
            value={formState.email}
            onChange={onChangeInput}
            label="Email Adress"
            required={true}
            type="email"
            autoComplete="email"
          />
          <InputLabel
            value={formState.password}
            onChange={onChangeInput}
            label="Password"
            required={true}
            type="password"
            autoComplete="current-password"
          />
          <div>
            <Button
              label={isLoading ? <LoadingSpinner /> : "Sign in"}
              type="submit"
              className="btn-submit"
              onClick={() => onSubmitForm()}
              isDisabled={!formState.email || !formState.password || isLoading}
              isLoading={isLoading}
            />
          </div>
        </form>

        <p className="create-account">
          Not a member?
          <a onClick={() => setLoginScreen(LoginScreen.SignUp)}>Create account here</a>
        </p>
      </div>
    </>
  );
};

export default SignIn;

interface SignInProps {
  setLoginScreen: (value: LoginScreen) => void;
}
