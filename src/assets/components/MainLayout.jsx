import { Outlet } from "react-router-dom";
import Header from "./Header";

const MainLayout = (children) => {
  return (
    <>
      <Header />
      <Outlet context={children} />
      <div>Import you Footer here</div>
    </>
  );
};

export default MainLayout;
