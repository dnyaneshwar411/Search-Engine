import ImageSearchResults from "@/components/ImageSearchResults";
import { Link } from "next/navigation";

export default async function ImageSearchPage({ searchParams }) {
  const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
  const CONTEXT_KEY = process.env.CONTEXT_KEY;
  const startIndex = searchParams.start || "1";
  
  const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${GOOGLE_API_KEY}&cx=${CONTEXT_KEY}&q=${searchParams.searchTerm}&searchType=image&start=${startIndex}`);

  if (!response.ok) throw new Error("Something went wrong");

  const data = await response.json();

  if (!data.items) return (<div className="flex flex-col justify-center items-center pt-10">
    <h1 className="text-3xl mb-4">No results found</h1>
    <p className="text-lg">
      Try searching for something else or go back to the homepage. &nbsp;
      <Link href="/">Home</Link>
    </p>
  </div>)

  return <>
    {data.items && <ImageSearchResults data={data} />}
  </>
}