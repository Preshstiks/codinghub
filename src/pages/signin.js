import { signInAuth } from "@/hooks/signUpAuth";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { mutate: signInUser } = signInAuth();
  const dispatch = useDispatch();

  const { Loading } = useSelector((state) => state.auth);
  const handleSignIn = (e) => {
    e.preventDefault();
    signInUser({ email, password, dispatch });
  };

  return (
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 font-instrumental">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <Image
          width={300}
          height={300}
          class="mx-auto h-10 w-auto"
          src="/medium_icon.png"
          alt=""
        />
        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign In to your account
        </h2>
        <div>
          <div className="py-6 text-center">
            <Link
              className="text-xs flex justify-center items-center gap-3 border border-neutral-400 hover:border-neutral-500 rounded-full py-2"
              href="/">
              <FcGoogle className="text-xl" />
              Sign In with Google
            </Link>
          </div>
          <div className="pt-4 flex items-center space-x-3">
            <div className=" bg-neutral-300 w-full h-0.5"></div>

            <h1 className="text-neutral-400 text-sm">OR</h1>
            <div className=" bg-neutral-300 w-full h-0.5"></div>
          </div>
        </div>
      </div>
      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" onSubmit={handleSignIn}>
          <div>
            <label
              for="email"
              class="block text-sm font-medium leading-6 text-gray-900">
              Email address
            </label>
            <div class="mt-2">
              <input
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="janedoe@email.com"
                class="block w-full rounded-md border border-neutral-300 px-6 py-2 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <div class="flex items-center justify-between">
              <label
                for="password"
                class="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
            </div>
            <div class="mt-2">
              <input
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                class="block w-full rounded-md border border-neutral-300 px-6 py-2 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              class="flex w-full justify-center rounded-md bg-black px-3 py-2 text-sm font-semibold leading-6 text-white hover:bg-white hover:border hover:border-black hover:text-black hover:duration-500">
              {Loading ? "Logging in..." : "Sign In"}
            </button>
          </div>
        </form>
        <p class="mt-10 text-center text-sm text-gray-500">
          Not a Member?
          <Link
            href="/signup"
            class="font-semibold leading-6 text-black hover:text-neutral-700">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
