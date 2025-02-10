import Hero from "../assets/components/Hero";
import AnimateText from "../assets/components/AnimateText";
const Homepage = () => {
  //here come all your sections for homepage except footer and header since they are part of the MainLayout
  //example:
  //return <><Hero/>

  //<Carousel/>
  //<ProgressBar/>
  //<PopularCourses/></>
  return (
    <div>
      <Hero />
      <AnimateText />
    </div>
  );
};

export default Homepage;
