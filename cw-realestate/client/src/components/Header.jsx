import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);
  return (
    <header className="bg-indigo-200 shadow-sm">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-4">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-indigo-500">CW</span>
            <span className="text-indigo-950">RealEstate</span>
          </h1>
        </Link>
        <form
          onSubmit={handleSubmit}
          className="bg-indigo-100 p-2 rounded-full flex items-center"
        >
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-28 sm:w-64"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>
            <FaSearch className="text-indigo-950" />
          </button>
        </form>
        <ul>
          <Link to="/">
            <li className="hidden sm:inline-block mx-2 sm:mx-4 text-sm sm:text-lg text-indigo-950 hover:opacity-75">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline-block mx-2 sm:mx-4 text-sm sm:text-lg text-indigo-950 hover:opacity-75">
              About
            </li>
          </Link>
          <Link to="/profile">
            {currentUser ? (
              <img
                className="rounded-full h-10 w-10 object-cover"
                src={currentUser.avatar}
                alt="profile"
              />
            ) : (
              <li className="sm:inline-block mx-2 sm:mx-4 text-sm sm:text-lg text-indigo-950 hover:opacity-75">
                Sign In
              </li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
}
