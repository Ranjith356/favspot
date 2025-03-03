import {  Outlet, useLocation } from "react-router-dom";
import Content from "../content/content";
import HeaderNav from "../headerNav/headerNav";
import "./home.css"

export default function Home() {
  let location=useLocation();
  return (
    <div className="home" >
      <HeaderNav />
      {location.pathname==="/home" && <Content />}
     <Outlet />
    </div>
  );
}
