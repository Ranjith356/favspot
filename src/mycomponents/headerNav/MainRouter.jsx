import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../home/home";
import AccountCreation from "../accountCreation/AccountCreation";
import PostProduct from "../postProduct/PostProduct";
import helpDesk from "../helpDesk/helpDesk";
import Login from "../loginPage/Login"
export default function MainRouter() {
  
  return (
   <>
   <BrowserRouter>
   <Routes>
<Route exact path="/" Component={Login} />
<Route path="/home" Component={Home} >
<Route path="account-creation" Component={AccountCreation} />
<Route path="post-product" Component={PostProduct} />
<Route path="help-desk" Component={helpDesk} />
</Route>
</Routes>
</BrowserRouter>
</>
  )
}
