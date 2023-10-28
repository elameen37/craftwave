import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-indigo-100 shadow-sm">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-4">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-indigo-500">CW</span>
            <span className="text-indigo-950">RealEstate</span>
          </h1>
        </Link>
        <form className="bg-indigo-200 p-2 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-28 sm:w-64"
          />
          <FaSearch className="text-indigo-950" />
        </form>
        <ul>
          <Link to="/">
            <li className="hidden sm:inline-block mx-2 sm:mx-4 text-sm sm:text-lg text-indigo-950 hover:underline">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline-block mx-2 sm:mx-4 text-sm sm:text-lg text-indigo-950 hover:underline">
              About
            </li>
          </Link>
          <Link to="/sign-in">
            <li className="sm:inline-block mx-2 sm:mx-4 text-sm sm:text-lg text-indigo-950 hover:underline">
              Sign In
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
