import "./login.css";
import { Form  ,Input ,Button} from 'antd';
import { useState } from "react";
import { MobileNumber } from "../../../validation/Validation";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const [btnVisibility,setBtnVisibility]=useState(false)
  const [form]=Form.useForm();
  const navigate=useNavigate()
  const handleClick=()=>{
    form.validateFields().then((values) => {
      const{phone}=values;
   const validMobileNumber=MobileNumber(phone);
  if(validMobileNumber===true){
  navigate("home");
   }
    });
 
  }
  const btnclick=()=>{
    setBtnVisibility(true);
  }
  return (
    <>
    <div className="login-background">
        <div className="login-content">
<img className="login-logo" src="svgviewer-output+(4).svg.jpg" />
<div className="login-label">
    <p className="login">Login</p>or
    <p className="login">Signup</p>
</div>
<Form form={form} onFinish={handleClick} className="login-form">
<Form.Item
        name="phone"
        rules={[
          {
            required: true,
            message: 'Please input your phone number!',
          },
        ]}
      >
        <Input
         placeholder="Enter Mobile Number"
          addonBefore={"+91"}
          style={{
            width: '100%',
          }}
          onClick={btnclick}
        />
      </Form.Item>
      {btnVisibility &&(
      <Form.Item>
        <Button  type="primary" htmlType="submit" className="login-btn">
          Continue
        </Button>
      </Form.Item>
      )}
      </Form>
        </div>
    </div>
    </>
  )
}
