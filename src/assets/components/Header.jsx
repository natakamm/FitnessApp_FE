import logo from "../images/Logo.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Cursor from "./Cursor";

const Header = () => {
  const location = useLocation();
  const { pathname } = location;
  const links = [
    { url: "/", name: "Home" },
    { url: "/categories", name: "Categories" },
    { url: "/courses", name: "Courses" },
  ];

  return (
    <>
      <div
        className={`justify-between flex items-center py-8 pr-10 pl-6  ${
          pathname === "/"
            ? "absolute z-50 flex w-full bg-transparent"
            : "bg-black"
        }`}
      >
        <figure>
          <img src={logo} alt="fitness-app-logo" width={37} />
        </figure>
        <div className="flex items-center gap-12">
          {links.map(({ name, url }) => (
            <Link key={url} to={url}>
              <h3
                className={`font-inter italic text-sm text-white hover:underline ${
                  pathname === url ? "font-extrabold" : ""
                }`}
              >
                {name}
              </h3>
            </Link>
          ))}
          <Link to="">
            <h3 className="font-inter font-semibold italic text-sm text-black bg-customSecondary px-3 py-2 rounded-lg">
              LogIn/SignUp
            </h3>
          </Link>
        </div>
      </div>
      <Cursor />
    </>
  );
};

export default Header;
