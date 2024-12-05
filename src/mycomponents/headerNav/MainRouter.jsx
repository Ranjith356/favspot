import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./loginPage/Login";
import Home from "./home/home";

export default function MainRouter() {
  return (
   <>
   <BrowserRouter >
   <Routes>
<Route exact path="/favspot" Component={Login} />
<Route path="/home" Component={Home} />
</Routes>
</BrowserRouter>
</>
  )
}
