/* eslint-disable no-undef */
import "./login.css";
import { Form  ,Input ,Button} from 'antd';
import { useState } from "react";
import { MobileNumber } from "../../../validation/Validation";
import toast from 'react-hot-toast';
import { UpdateQuery } from "../../../supabase/query";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateFormData } from "../tookitStore/StoreSlice";
export default function Login() {
  const  navigate=useNavigate()
  const dispatch = useDispatch();
  const [btnVisibility,setBtnVisibility]=useState(false)
  const [form]=Form.useForm();
  const handleClick=()=>{
    form.validateFields().then((values) => {
      const{phoneNumber}=values;
   const validMobileNumber=MobileNumber(phoneNumber);
  if(validMobileNumber===true){
    dispatch(updateFormData({ loginMobileNumber: phoneNumber}));
    try{
    UpdateQuery(phoneNumber);
    navigate("/home");
  }catch{
    navigate("/favspot");
  }   
   
   }else{
    setBtnVisibility(false);
    toast.error("invalid mobile Number");
   }
    });
  }
  const btnclick= async()=>{
    setBtnVisibility(true);
  }
  return (
    <>
    <div>
    <div className="login-background">
        <div className="login-content">
<div className="login-label">
    <p className="login">Welcome back <br></br>Share the Love!</p>
    {/* or
    <p className="login">Signup</p> */}
</div>
<Form form={form} onFinish={handleClick} className="login-form">
<Form.Item
        name="phoneNumber"
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
    </div>
    </>
  )
}
