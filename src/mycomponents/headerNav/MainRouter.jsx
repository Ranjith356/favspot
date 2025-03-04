import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../home/home";
import AccountCreation from "../accountCreation/AccountCreation";
import PostProduct from "../postProduct/PostProduct";
import HelpDesk  from "../helpDesk/helpDesk";
import Login from "../loginPage/Login"
export default function MainRouter() {
  return (
   <>
<BrowserRouter basename="/favspot">
      <Routes>
        <Route index element={<Login />} />
        <Route path="home" element={<Home />}>
          <Route path="account-creation" element={<AccountCreation />} />
          <Route path="post-product" element={<PostProduct />} />
          <Route path="help-desk" element={<HelpDesk  />} />
        </Route>
      </Routes>
    </BrowserRouter>
</>
  )
}
