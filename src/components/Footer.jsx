import CountryLookup from "./CountryLookup";

export default function Footer() {
  return <footer className="absolute bottom-0 left-0 text-sm text-gray-500 bg-[#f2f2f2] w-full">
    <div className="border-b-2 px-8 py-2">
      <CountryLookup />
    </div>
    <div className="flex flex-col sm:flex-row items-center justify-between px-8 py-3">
      <ul className="flex items-center gap-6">
        <li className="link">About</li>
        <li className="link">Advertising</li>
        <li className="link">Business</li>
        <li className="link">How search works</li>
      </ul>
      <ul className="flex items-center gap-6">
        <li className="link">Privacy</li>
        <li className="link">Terms</li>
        <li className="link">Settings</li>
      </ul>
    </div>
  </footer>
};