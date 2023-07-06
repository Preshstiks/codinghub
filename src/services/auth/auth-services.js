import {
  logOut,
  loginFailure,
  loginRequest,
  loginSuccess,
  registerFailure,
  registerRequest,
  registerSuccess,
} from "@/store/actions/authActions";
import { auth, db } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import Router from "next/router";
import { doc, setDoc } from "firebase/firestore";

export const authSignIn = async ({
  email,
  password,
  dispatch,
  firstName,
  lastName,
}) => {
  dispatch(loginRequest());
  try {
    const userSignInDetails = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = {
      id: userSignInDetails.user.uid,
      email: userSignInDetails.user.email,
      full_Name: userSignInDetails.user.displayName,
    };
    Router.push("/");
    console.log({ user });
    dispatch(loginSuccess({ data: user }));
  } catch (error) {
    console.log(error);
    dispatch(loginFailure());
  }
};

export const createAUser = ({ lastName, firstName, email, id }) => {
  const userRef = doc(db, "users", id);
  try {
    setDoc(userRef, {
      userFullName: `${lastName} ${firstName}`,
      email,
      id,
      userBlogs: [],
    });
  } catch (error) {
    console.log(error);
  }
};

export const authSignUp = async ({
  email,
  password,
  firstName,
  lastName,
  dispatch,
}) => {
  dispatch(registerRequest());
  try {
    const userSignUpDetails = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    await updateProfile(auth.currentUser, {
      displayName: `${lastName} ${firstName}`,
    });
    console.log(userSignUpDetails);
    authSignIn({ email, password, dispatch, firstName, lastName });
    createAUser({
      firstName,
      lastName,
      email: userSignUpDetails.user.email,
      id: userSignUpDetails.user.uid,
    });
  } catch (error) {
    console.log(error);
    dispatch(registerFailure());
  }
};

export const authLogout = async (dispatch) => {
  try {
    await signOut(auth);
    Router.push("/signin");
    dispatch(logOut());
  } catch (error) {
    console.log(error);
  }
};
