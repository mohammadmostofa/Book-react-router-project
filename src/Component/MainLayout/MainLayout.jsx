import { Outlet } from "react-router";
import Navbar from "../shared/Navbar/Navbar";

 
 export const MainLayout =() => {
  return (
    <div>
           <Navbar ></Navbar>
          <Outlet></Outlet>
          
    </div>
  );
};

export default MainLayout;