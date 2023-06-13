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
    <nav
      className={`${
        navColor ? "bg-white z-50" : "bg-cyan-500"
      } sticky ease-in-out duration-700 top-0 border-b border-black`}>
      <div className="navbar flex-bar">
        <Link href="/">
          <div className="logo">
            <Image src="/medium_icon.png" width={50} height={50} alt="logo" />
            <h1 className="medium-logo">CodingHub</h1>
          </div>
        </Link>
        <div className="navlinks">
          <Link className="invisible md:visible" href="/">
            Our Story
          </Link>
          <Link className="invisible md:visible" href="/">
            Membership
          </Link>
          <Link className="invisible md:visible" href="/">
            Write
          </Link>
          <Link href="/signin">Sign In</Link>
          <Link
            className={`${
              navColor ? "bg-green-700" : "bg-black"
            } rounded-full text-white py-2 px-4`}
            href="/signup">
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NotLoggedIn;
