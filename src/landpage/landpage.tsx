import { Outlet } from "react-router-dom";
import {Nav} from "./components/Nav"
import { HomePage } from "./view/Home";
export const LandPage =()=>{
    return(
    <>
         <Nav/>
         <Outlet/>
    </>
    );
}