import { LoginScreen } from "../../../interfaces/Login";
import "./SignUp.scss";

const SignUp = ({ setLoginScreen }: SignUpProps) => {
  return (
    <div>
      <button onClick={() => setLoginScreen(LoginScreen.SignIn)} />
    </div>
  );
};

export default SignUp;

interface SignUpProps {
  setLoginScreen: (value: LoginScreen) => void;
}
