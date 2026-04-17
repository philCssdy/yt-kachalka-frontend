import { Link } from "react-router-dom";

import { Logo } from "../../Logo";

export const NavBar = () => {
  return (
    <div className="container flex items-center py-4 mx-auto gap-x-10">
      <Link to={"/"} className="">
        <Logo />
      </Link>
      <span className="text-2xl font-black">yt-kachalka </span>
      <nav className="flex justify-end grow">
        <ul className="flex items-center gap-x-8">
          <li>
            <Link
              to={"howtouse"}
              className="font-semibold hover:text-indigo-600"
            >
              Как использовть
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
