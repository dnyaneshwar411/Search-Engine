import HomeHeader from "@/components/HomeHeader";
import HomeSearch from "@/components/HomeSearch";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* Header */}
      <HomeHeader />

      {/* Body */}
      <div className="flex flex-col items-center mt-24">
        <Image width={300} height={100} alt="Google Image." src="/google.webp" />
        <HomeSearch />
      </div>
    </main>
  );
}
