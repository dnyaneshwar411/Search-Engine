"use client";

import { useRouter } from "next/navigation";

import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";

export default function HomeSearch() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  function dummySearch(e) {
    e.preventDefault();
    if (!input.trim()) return;
    router.push(`/search/web?searchTerm=${input}`);
  }

  async function randomSearch() {
    setLoading(true);
    try {
      const response = await fetch(`https://random-word-api.herokuapp.com/word`)
      const word = await response.json();
      router.push(`/search/push/search-term=${word}`);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  }

  return <>
    <form onSubmit={dummySearch} className="flex w-full mt-5 mx-auto max-w-[90%] border-2 border-gray-200 px-5 py-3 rounded-full hover:shadow-md transition-shadow focus-within:shadow-md sm:max-w-xl lg:max-w-2xl">
      <AiOutlineSearch className="text-xl text-gray-500 mr-3" />
      <input type="text" className="grow focus:outline-none" value={input} onChange={e => setInput(e.target.value)} />
      <BsFillMicFill className="text-lg" />
    </form>

    <div className="mt-8 flex flex-col sm:flex-row gap-4">
      <button onClick={dummySearch} className="btn">Google Search</button>
      <button disabled={loading} onClick={randomSearch} className="btn flex items-center justify-center disabled:opacity-80">
        {loading ? <img src="/loader.svg" className="h-6 text-center" /> : "I Am Feeling Lucky"}
      </button>
    </div>
  </>
};