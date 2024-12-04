// import { Select } from "antd"
import "./headerNav.css"
// import { selectorOption } from "./languages"
// import Uploader from "./uploader/Uploader"
import logo from "../../images/Screenshot 2024-11-20 144344.png"
import { AppstoreAddOutlined, MessageOutlined, UserAddOutlined } from "@ant-design/icons"
// import account from "../../images/web.png"
// import creator from "../../images/interface.png"
// import message from "../../images/messenger.png"
// export default function HeaderNav() {
//   const [select,setselect]=useState()
//   console.log(select)
//   const postProduct=()=>{
// console.log("postProductDetails")
//   }
//   const selectOnChange=(v)=>{
//     setselect(Number(v))
// }

//   return (
//     <>
//     <div className="header-nave">
//         <img className="logo" src="svgviewer-output+_4_.svg-removebg-preview.png"></img>
//         <Select
//           showSearch
//           style={{
//             width: 200,
//           }}
//           placeholder="Select Your Ideal Product"
//           optionFilterProp="label"
//           filterSort={(optionA, optionB) =>
//             (optionA?.label ?? "")
//               .toLowerCase()
//               .localeCompare((optionB?.label ?? "").toLowerCase())
//           }
//           options={selectorOption}
//           onChange={selectOnChange}
//         />
//         <div className="post-prodect" onClick={postProduct} >
//         <img className="order-logo" src="svgviewer-output%20(5).svg"></img>
//         <label className="post-label">your Product</label>
//         </div>
//     </div>
//     <Uploader selectValue={select}/>
//     </>
//   )
// }


export default function headerNav() {
  return (
    <div className="header">
      <img src={logo} className="logo" alt="logo"></img>
      <div className="iconsdiv">
      <MessageOutlined className="icons"/>
      <AppstoreAddOutlined className="icons"/>
      <UserAddOutlined className="icons" />
      </div>
    </div>
  )
}
