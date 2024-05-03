"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";

import { AiOutlineSearch, AiOutlineCamera } from "react-icons/ai";

export default function SearchHeaderOptions() {
  const pathName = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");

  function selectTab(tab) {
    router.push(`/search/${tab}?searchTerm=${searchTerm}`);
  }

  return <div className="flex gap-2 select-none border-b-2 w-full justify-center lg:justify-start lg:pl-52 text-gray-700 text-sm">
    <div onClick={() => selectTab("web")} className={`flex gap-1 items-center border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 px-2 ${pathName === "/search/web" && "!border-blue-600 !text-blue-600"}`}>
      <AiOutlineSearch className="text-md" />
      <p>All</p>
    </div>
    <div onClick={() => selectTab("image")} className={`flex gap-1 items-center border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 px-2 ${pathName === "/search/image" && "!border-blue-600 !text-blue-600"}`}>
      <AiOutlineCamera className="text-md" />
      <p>Image</p>
    </div>
  </div>
}