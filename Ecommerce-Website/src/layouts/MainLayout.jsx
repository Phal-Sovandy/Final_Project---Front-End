import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation.jsx";

function MainLayout() {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
}

export default MainLayout;
