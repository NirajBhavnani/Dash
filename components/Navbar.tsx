import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  return (
    // flex-between is a custom class written in globals.css (No mystery without using flex)
    <nav className="flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/icons/logo.svg"
          height={32}
          width={32}
          alt="Dash logo"
          className="max-sm:size-10"
        />

        {/* In tailwind css, we use [] whenever we want to apply specific values */}
        <p className="text-[26px] font-extrabold text-white max-sm:hidden">
          Dash
        </p>
      </Link>

      {/* For mobile devices */}
      <div className="flex-between gap-5">
        {/* TODO: Clerk- User Management */}

        <MobileNavbar />
      </div>
    </nav>
  );
};

export default Navbar;
