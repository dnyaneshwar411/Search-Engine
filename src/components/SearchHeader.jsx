import Image from "next/image";
import Link from "next/link";

import { RiSettings3Fill } from "react-icons/ri";
import { TbGridDots } from "react-icons/tb";

import SearchBox from "./SearchBox";
import SearchHeaderOptions from "./SearchHeaderOptions";

export default function SearchHeader() {
  return <header className="sticky top-0 bg-white">
    <div className="flex w-full p-6 items-center justify-between">
      <Link href="/">
        <Image width="120" height="40" src="/google.webp" alt="this is website logo" />
      </Link>
      <div className="grow">
        <SearchBox />
      </div>
      <div className="hidden md:inline-flex gap-2">
        <RiSettings3Fill className="header-icon" />
        <TbGridDots className="header-icon" />
      </div>
      <button className="bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md transition-all ml-2">Sign In</button>
    </div>

    <SearchHeaderOptions />
  </header>
}