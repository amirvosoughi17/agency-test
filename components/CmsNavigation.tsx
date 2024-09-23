import Link from "next/link";
import React from "react";

export const CmsNavigation = () => {
  return (
    <div className=" flex items-center justify-between px-5 py-3 ">
      <h1 className=" text-white">LOGO</h1>
      <Link href="/" className=" text-blue-500">
        back home
      </Link>
    </div>
  );
};
