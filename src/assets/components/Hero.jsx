import Header from "./Header";
import hero from "../images/hero.jpg";

const Hero = () => {
  return (
    <div className=" z-0">
      <figure>
        <img src={hero} alt="hero" />
      </figure>
    </div>
  );
};

export default Hero;
