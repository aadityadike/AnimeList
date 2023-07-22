import SearchBox from "./SearchBox";
import { useState } from "react";

const Navbar = () => {
  const [handleClick, setHandleClick] = useState(false);
  return (
    <section className="flex flex-col gap-10">
      <nav className="flex fixed top-0 left-0 right-0 bg-gradient-to-r from-violet-500 to-black text-white">
        {/* Logo Section */}
        <div className="flex-1 p-4 relative left-20">
          <a className="text-2xl font-bold text-white cursor-pointer">
            🚀 AnimeList
          </a>
        </div>

        {/* Navigation Links */}
        <div className="space-x-4 ml-4 flex flex-1 p-4 gap-5 relative left-20">
          <a className="text-white hover:text-gray-200 font-semibold cursor-pointer">
            Home
          </a>
          <a className="text-white hover:text-gray-200 font-semibold cursor-pointer">
            Profile
          </a>
          <a className="text-white hover:text-gray-200 font-semibold cursor-pointer">
            AnimeList
          </a>
          <a
            className="className=text-white hover:text-gray-200 font-semibold cursor-pointer"
            onClick={() => {
              setHandleClick(!handleClick);
            }}
          >
            Search
          </a>
        </div>
      </nav>
      {handleClick ? <SearchBox /> : ""}
    </section>
  );
};

export default Navbar;
