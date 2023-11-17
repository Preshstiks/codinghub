import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const NotLoggedIn = () => {
  const [navColor, setNavColor] = useState(false);
  function setColor() {
    if (window.scrollY >= 290) {
      setNavColor(true);
    } else {
      setNavColor(false);
    }
  }

  useEffect(() => {
    if (window) window.addEventListener("scroll", setColor);
  }, []);

  return (
    // <nav
    //   className={`${
    //     navColor ? "bg-white z-50" : "bg-cyan-500"
    //   } sticky ease-in-out duration-700 top-0 border-b border-black`}
    // >
    //   <div className="navbar">
    //     <Link href="/">
    //       <div className="logo">
    //         <Image
    //           className="md:w-[50px] md:h-[50px] w-[35px] h-[35px]"
    //           src="/medium_icon.png"
    //           width={50}
    //           height={50}
    //           alt="logo"
    //         />
    //         <h1 className="medium-logo md:text-[27px] text-[24px] tracking-[-2px]">
    //           CodingHub
    //         </h1>
    //       </div>
    //     </Link>
    //     <div className="navlinks flex items-center">
    //       <Link className="invisible md:visible text-[13px]" href="/">
    //         Our Story
    //       </Link>
    //       <Link className="invisible md:visible text-[13px]" href="/">
    //         Membership
    //       </Link>
    //       <Link className="invisible md:visible text-[13px]" href="/">
    //         Write
    //       </Link>
    //       <div>
    //         <Link className="text-[13px]" href="/signin">
    //           Sign In
    //         </Link>
    //       </div>
    //       <div>
    //         <Link
    //           className={`${
    //             navColor ? "bg-green-700 text-[13px]" : "bg-black"
    //           } rounded-full text-white py-3 px-4 text-[13px]`}
    //           href="/signup"
    //         >
    //           Get Started
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </nav>
    <div
      className={`${
        navColor ? "bg-white z-50" : "bg-cyan-500"
      } sticky ease-in-out duration-700 top-0 border-b px-[5%] py-3 border-black`}
    >
      <div className="flex justify-between items-center">
        <div>
          <Link className="flex items-center gap-[2px]" href="/">
            <Image
              className="md:w-[50px] md:h-[50px] w-[35px] h-[35px]"
              src="/medium_icon.png"
              width={50}
              height={50}
              alt="logo"
            />
            <h1 className="medium-logo sm:text-[30px] text-[25px] tracking-[-2px]">
              CodingHub
            </h1>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:block text-[13px]">Our Story</div>
          <div className="hidden md:block text-[13px]">Membership</div>
          <div className="hidden md:block text-[13px]">Write</div>
          <div>
            <Link className="text-[13px] xsm:block hidden" href="/signin">
              Sign In
            </Link>
          </div>
          <div>
            <Link
              className={`${
                navColor ? "bg-green-700 text-[13px]" : "bg-black"
              } rounded-full text-white sm:py-3 sm:px-4 py-2 px-4 text-[13px]`}
              href="/signup"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotLoggedIn;
