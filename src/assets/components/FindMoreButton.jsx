import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";

const FindMoreButton = ({ link, text }) => {
  return (
    <div>
      <Link to={link} className="more_button yellow">
        <span className="font-inter font-medium text-white pr-1">{text}</span>
        <GoArrowRight size={25} className="icon" />
      </Link>
    </div>
  );
};

export default FindMoreButton;
