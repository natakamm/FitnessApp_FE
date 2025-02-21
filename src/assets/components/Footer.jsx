import { Link } from "react-router-dom";
import logo from "../images/Logo.png";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-customSecondary text-black">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 p-4 pt-7">
        {/* Column 0 */}
        <div className="ml-4 ">
          <img
            src={logo}
            alt="logo"
            width={38}
            style={{
              filter: "drop-shadow(0px 0px 5px rgba(0, 0, 0, 1))",
            }}
          />
          <ul className="space-y-3 font-secondary text-sm mt-8">
            <li>
              <Link to="/" className="hover:text-customAccent3">
                <div className="flex space-x-4 text-2xl">
                  <FaFacebook className="text-black cursor-pointer font-lg" />
                  <FaInstagram className="text-black  cursor-pointer" />
                  <FaYoutube className="text-black  cursor-pointer" />
                  <FaLinkedin className="text-black  cursor-pointer" />
                </div>
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 1 */}
        <div className="ml-4">
          <h3 className="font-inter mb-4 text-lg">FitnessServices</h3>
          <ul className="space-y-3 font-secondary text-sm">
            <li>
              <Link to="/" className="hover:text-customAccent3">
                Home
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-customAccent3">
                Services
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-customAccent3">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-customAccent3">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-customAccent3">
                Blogs
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-customAccent3">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="ml-8 mt-2">
          <h3 className=" font-inter mb-4 text-lg">PopularFitnessServices</h3>
          <ul className="space-y-3 font-secondary text-sm">
            <li>
              <Link to="/" className="hover:text-customAccent3">
                Personal Training
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-customAccent3">
                Yoga Classes
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-customAccent3">
                Nutrition Plans
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-customAccent3">
                Online Coaching
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-customAccent3">
                Strength Training
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-customAccent3">
                Group Fitness Classes
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="ml-8 mt-2">
          <h3 className="font-inter mb-4 text-lg text-bold">Locations</h3>
          <div className="grid grid-cols-2 gap-2">
            <ul className="space-y-3 font-secondary text-sm">
              <li>New York</li>
              <li>Los Angeles</li>
              <li>Chicago</li>
              <li>Houston</li>
              <li>Miami</li>
              <li>San Francisco</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
