import GoogleSvg from "../../assets/svgs/google.svg";
import EmailProLogo from "../../assets/icons/emailPro-logo.png";
import "./login.css";
import { TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { loginwithGoogle } from "../../redux/auth/actions";

export function Signup() {
  const dispatch = useDispatch()

  const handleSingup = () => {
      dispatch(loginwithGoogle)
  }
  return (
    <div className="flex justify-between">
      <div id="leftEmailPage" className="w-1/3 mx-auto my-10">
        <h1 className="font-extrabold text-5xl mb-10">Welcome!</h1>
        <button className="googleLoginBtn gap-2" onClick={handleSingup}>
          <img src={GoogleSvg} className="w-8" />
          <div className="text-login-google">Continue with Google</div>
        </button>
        <p className="my-4 text-center">or</p>
        <form className="flex flex-col gap-3">
          <TextField
            label={"Email"}
            className="p-0"
            type="email"
            name="email"
            required
          />
          <TextField
            label={"Password"}
            type="password"
            name="password"
            required
          />
          <input type="submit" value={"Create account"} className="button-primary mt-8"/>
          <h6 className="text-center text-xs">By clicking "Create account" or "Continue with Google", you agree to the Email Pro TOS and Privacy Policy.</h6>
        </form>
        <p className="text-center my-10">Already have an account? <a href="/auth">Log in</a></p>
      </div>
      <div id="rightEmailPage" className="w-1/2">
        <img src={EmailProLogo} className="h-screen w-full" />
      </div>
    </div>
  );
}