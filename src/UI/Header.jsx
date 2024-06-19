import React from "react";
import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

export default function Header() {
  return (
    <>
      <header className="border-stone-00 flex items-center justify-between border-b-2 bg-yellow-500 px-4 py-4 sm:px-6">
        <Link to="/" className="tracking-[3px]">
          React-Pizza
        </Link>

        <SearchOrder />

        <Username />
      </header>
    </>
  );
}
