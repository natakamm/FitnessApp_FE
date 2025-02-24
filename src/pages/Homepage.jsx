import Hero from "../assets/components/Hero";
import AnimateText from "../assets/components/AnimateText";
import CatsCarousel from "../assets/components/CatsCarousel";
import CoursesList from "../assets/components/CoursesList";
import Scrollbar from "../assets/components/Scrollbar";
import FindMoreButton from "../assets/components/FindMoreButton";
const Homepage = () => {
  return (
    <div>
      <Hero />
      <AnimateText />
      <Scrollbar />
      <FindMoreButton text="Find More" />
      <CatsCarousel />
      <CoursesList />
    </div>
  );
};

export default Homepage;
