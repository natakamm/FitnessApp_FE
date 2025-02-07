import { Outlet } from "react-router-dom";

const MainLayout = (children) => {
  return (
    <>
      <div className="font-inter">Import Header here</div>
      <Outlet context={children} />
      <div>Import you Footer here</div>
    </>
  );
};

export default MainLayout;
