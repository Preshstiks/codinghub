import {
  authLogout,
  authSignIn,
  authSignUp,
} from "@/services/auth/auth-services";
import { useMutation } from "@tanstack/react-query";

export const signUpAuth = () => {
  return useMutation(authSignUp);
};

export const signInAuth = () => {
  return useMutation(authSignIn);
};
export const logOutAuth = () => {
  return useMutation(authLogout);
};
