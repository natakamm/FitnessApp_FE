import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const MainLayout = (children) => {
  return (
    <>
      <Header />
      <Outlet context={children} />
      <Footer />
    </>
  );
};

export default MainLayout;
