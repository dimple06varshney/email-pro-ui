import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import GoogleSvg from "../../assets/svgs/google.svg";
import EmailProLogo from "../../assets/icons/emailPro-logo.png";
import "./login.css";
import { TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { loginwithGoogle } from "../../redux/auth/actions";
import { useSelector } from "react-redux";
import { selectAuth } from "../../redux/auth/selectors";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, isSuccess } = useSelector(selectAuth);

  const handleGoogleLogin = () => {
     dispatch(loginwithGoogle())
  }

  useEffect(() => {
    console.log("isSuccess----", isSuccess);
    if (isSuccess) navigate('/');
  }, [isSuccess]);

  return (
    <div className="flex justify-between">
      <div id="leftEmailPage" className="w-1/3 mx-auto my-10">
        <h1 className="font-extrabold text-5xl mb-10">Login</h1>
        <button className="googleLoginBtn gap-2" onClick={handleGoogleLogin}>
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
          <input type="submit" className="button-primary mt-8"/>
        </form>
        <p className="text-center my-10">No account? <a href="/signup">Create one</a></p>
      </div>
      <div id="rightEmailPage" className="w-1/2">
        <img src={EmailProLogo} className="h-screen w-full" />
      </div>
    </div>
  );
}
