import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import * as actionTypes from "./types";
import { auth } from "../../firebase.config";
import { useNavigate } from "react-router-dom";

export const loginwithGoogle = () => async (dispatch) => {
  const provider = new GoogleAuthProvider();
  dispatch({ type: actionTypes.REQUEST_LOADING });
  signInWithPopup(auth, provider)
    .then((result) => {
        const userData = {
            uid: result.user.uid,
            email: result.user.email,
            displayName: result.user.displayName,
            photoURL: result.user.photoURL,
            // Add other fields you need
          };  
      const auth_state = {
        current: userData,
        isLoggedIn: true,
        isLoading: false,
        isSuccess: true,
      };
      localStorage.setItem("auth", JSON.stringify(auth_state));
      console.log("auth_loggedin_authstate__");
      window.localStorage.removeItem("isLogout");
      dispatch({
        type: actionTypes.REQUEST_SUCCESS,
        payload: userData,
      });
      console.log("dispacted___");
    })
    .catch((err) => {
      dispatch({
        type: actionTypes.REQUEST_FAILED,
      });
    });
};

export const logout = () => (dispatch) => {
  dispatch({ type: actionTypes.REQUEST_LOADING });

  signOut(auth)
    .then(() => {
      dispatch({ type: actionTypes.LOGOUT_SUCCESS });
      window.localStorage.removeItem("auth");
      window.localStorage.setItem(
        "isLogout",
        JSON.stringify({ isLogout: true })
      );
    })
    .catch((error) => {
      dispatch({ type: actionTypes.LOGOUT_FAILED, payload: error });
    });
};
