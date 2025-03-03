/* eslint-disable react-hooks/rules-of-hooks */
import "./headerNav.css"
import logo from "../../images/Screenshot 2024-11-20 144344.png"
import { AppstoreAddOutlined, MessageOutlined, UserAddOutlined } from "@ant-design/icons"
import { useNavigate } from "react-router-dom"
import { Badge } from "antd";

export default function headerNav() {
const navigate=useNavigate();
const redirctionComponent=(prop)=>{
  switch(prop){
case "account-creation":
  navigate(prop);
break;
case "post-product":
  navigate(prop);
  break;
  case "help-desk":
    navigate(prop);
    break;
    case "/home":
      navigate(prop);
      break;
  }
}
  return (
    <div className="header">
      <img src={logo} className="logo" alt="logo"  onClick={()=>redirctionComponent("/home")}></img>
      <div className="iconsdiv">
        <Badge count={"9"}>
      <MessageOutlined className="icons" onClick={()=>redirctionComponent("help-desk")}/>
      </Badge>
      <AppstoreAddOutlined className="icons"  onClick={()=>redirctionComponent("post-product")}/>
      <UserAddOutlined className="icons" onClick={()=>redirctionComponent("account-creation")}/>
      </div>
    </div>
  )
}
