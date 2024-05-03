import Link from "next/link";
import { TbGridDots } from "react-icons/tb";

export default function HomeHeader() {
  return <header className="flex justify-end text-sm p-4">
    <div className="flex items-center space-x-4">
      <Link href="https://gmail.google.com" className="hover:underline">Gmail</Link>
      <Link href="https://image.google.com" className="hover:underline">Images</Link>
      <button>
        <TbGridDots className="hover:bg-gray-200 rounded-full text-4xl p-2" />
      </button>
      <button className="bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md transition-shadow">Sign In</button>
    </div>
  </header>
};
