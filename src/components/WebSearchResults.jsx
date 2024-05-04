import Pagination from "../components/Pagination";

import Link from "next/link";
import Parser from "html-react-parser";

export default function WebSearchResults({ data }) {

    return <div className="w-full mx-auto px-3 pb-40 md:pb-28 sm:pl-[5%] md:pl-[14%] lg:pl-52">
    <p className="text-gray-600 text-sm mt-3 mb-5">
    About {data.searchInformation.formattedTotalResults} results ({data.searchInformation.formattedSearchTime} seconds) 
    </p>

    {data.items?.map(item=><div key={item.cacheId} className="mb-8 max-w-xl">
      <div className="group flex flex-col">
        <Link href={item.link} className="text-sm truncate">
          {item.formattedUrl}
        </Link>

        <Link href={item.link} className="group-hover:underline decoration-blue-800 text-xl truncate font-medium text-blue-800">
        {item.title}
        </Link>
      </div>

      <p className="">{Parser(item.htmlSnippet)}</p>
    
    </div>)}

    <Pagination/>
    
  </div>
}