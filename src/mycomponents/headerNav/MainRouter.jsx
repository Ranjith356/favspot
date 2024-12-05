import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./loginPage/Login";
import Home from "./home/home";

export default function MainRouter() {
  return (
   <>
   <BrowserRouter basename="/">
   <Routes>
<Route exact path="/" Component={Login} />
<Route path="home" Component={Home} />
</Routes>
</BrowserRouter>
</>
  )
}
