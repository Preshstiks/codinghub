import { BsBell } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { logOutAuth } from "@/hooks/signUpAuth";
import { useDispatch } from "react-redux";

const LoggedInNavbar = () => {
  const [show, setShow] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const { mutate: logOut } = logOutAuth();
  const handleLogOut = () => {
    logOut(dispatch);
  };
  return (
    <div className="flex justify-between items-center px-10 py-1 border-b border-neutral-300">
      <div className="flex items-center font-instrumental gap-3">
        <Link href="/">
          <Image src="/medium_icon.png" width={50} height={50} />
        </Link>

        <div class="relative w-full hidden md:block">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-500"
              aria-hidden="true"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"></path>
            </svg>
            <span class="sr-only">Search icon</span>
          </div>
          <input
            type="text"
            id="search-navbar"
            class="block p-3 pl-10 w-full text-xs rounded-full bg-gray-50"
            placeholder="Search CodingHub"
          />
        </div>
      </div>
      <div className="flex gap-6 items-center font-instrumental">
        {router.pathname === "/write" ? (
          <button
            form="my-blogForm"
            className="py-1 px-4 text-xs text-white rounded-full bg-green-600 hover:bg-green-800">
            Publish
          </button>
        ) : (
          <Link
            className="text-gray-500 invisible text-sm flex items-center gap-1 md:visible"
            href="/write">
            <FiEdit />
            Write
          </Link>
        )}
        <Link className="text-gray-500 text-md " href="/">
          <BsBell />
        </Link>
        <div class="relative ml-3">
          <div>
            <button
              onClick={() => setShow(!show)}
              type="button"
              class="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
              <Image
                width={900}
                height={900}
                class="h-8 w-8 rounded-full"
                src="https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                alt=""
                style={{ objectFit: "cover" }}
              />
            </button>
          </div>

          {show && (
            <div class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Link
                href="/write"
                class="px-4 py-2 text-sm text-gray-700 flex items-center gap-1 md:hidden">
                <FiEdit />
                Write
              </Link>
              <Link
                href="/user/profile"
                class="block px-4 py-2 text-sm text-gray-700">
                Your Profile
              </Link>
              <p
                onClick={handleLogOut}
                class="block px-4 py-2 text-sm text-gray-700 cursor-pointer">
                Sign out
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoggedInNavbar;
