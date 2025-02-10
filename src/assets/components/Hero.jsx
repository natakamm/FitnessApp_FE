import Header from "./Header";
import hero from "../images/hero.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="z-10 relative">
      <figure>
        <img
          src={hero}
          alt="hero"
          className="brightness-65 w-full object-cover h-[800px]"
        />
      </figure>
      <div className="absolute top-1/3 left-0 w-full flex flex-col justify-center items-center text-center">
        <h1 className="font-inter font-extrabold italic text-white text-5xl">
          Your Fitness, Your Way
        </h1>
        <p className="font-inter text-xl max-w-2xl mt-5">
          Explore expert-led courses an train at your own pace with guided
          instructions tailored to your goals.
        </p>
        <Link to="">
          <div className="mt-10 font-inter font-semibold text-md text-black bg-customSecondary px-3 py-2 rounded-lg">
            Start Now
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
