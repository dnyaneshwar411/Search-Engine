"use client";

import { usePathname,useSearchParams } from "next/navigation";
import Link from "next/link";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

export default function Pagination() {
const pathName = usePathname();
const searchParams = useSearchParams();
const searchTerm = searchParams.get("searchTerm");
const startIndex = +searchParams.get("start") || 1;

 return <div className="text-blue-700 flex px-10 pb-4 justify-between sm:justify-start sm:gap-44 sm:px-0">
 {startIndex !==1 && <Link className="flex flex-col items-center gap-1 cursor-pointer hover:underline" href={`${pathName}?searchTerm=${searchTerm}&start=${startIndex - 10}`}> 
    <BsChevronLeft className="h-5" />
    <p>Previous</p>
  </Link>}

  {startIndex <=99 &&<Link className="flex flex-col items-center gap-1 cursor-pointer hover:underline" href={`${pathName}?searchTerm=${searchTerm}&start=${startIndex + 10}`}> 
     <BsChevronRight className="h-5" />
    <p>Next</p>
  </Link>}
 </div> 
}