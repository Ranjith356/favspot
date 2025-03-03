/* eslint-disable no-undef */
import { Button, Form, Input } from "antd"
import "./accountCreation.css"
import coloumnOneImage from "/src/images/Address-bro.png"
import { useSelector } from "react-redux"
import {fetchDpValuesQuery, userUpdateQuery } from "../../supabase/query";
import { useState } from "react";
import toast from "react-hot-toast";
export default function AccountCreation() {
 const [loadersavebtn,setloadersavebtn]=useState(false);
 const [loaderEdit,setloaderEdit]=useState(false)
  const formData = useSelector((state) => state.formData);
  const [form]=Form.useForm();
  const saveComponent=async() => {
    let forValues=form.getFieldValue();
      if(!forValues || Object.values(forValues).every(v => !v)){
    toast.error("Please fill in the required fields before saving.");
    return; 
  }
  setloadersavebtn(true);
    try{
    await userUpdateQuery({addressValues:forValues,MobileNumber:formData.loginMobileNumber});
    setloadersavebtn(false);
    toast.success("Address updated successfully!")
    form.resetFields()
    }catch{
      setloadersavebtn(false);
      toast.error("Failed to update address. Please try again.")
    }
  }
  const editComponent=async()=>{
    setloaderEdit(true);
    try{
    let dpFormValues=await fetchDpValuesQuery({MobileNumber:formData.loginMobileNumber});
    form.setFieldsValue(dpFormValues);
    setloaderEdit(false);
    }catch{
      setloaderEdit(false);
      toast.error("Failed to  fetch Data. Please try again.")
    }
  }
  return (
    <div className="container">
      <div className="coloumn-one">
        <img src={coloumnOneImage}  alt="image"/>
      </div>
      <div className="coloumn-two">
        <Form className="full-form" form={form} >
          <div className="form-content">
          <Form.Item
          name="address"
           label=" Enter Your Address"
           labelCol={{ span: 24 }}
           wrapperCol={{ span: 24 }}
           >
          <Input.TextArea     
          />
          </Form.Item>
          <Form.Item            
           label="Full Name "
           name="name"
           labelCol={{ span: 24 }} 
           wrapperCol={{ span: 24 }}
          >
          <Input />
          </Form.Item>
          <Form.Item
            label="Address Line 1"
            name="address1"
            labelCol={{ span: 24 }} 
            wrapperCol={{ span: 24 }}>
          <Input />
          </Form.Item>
          <Form.Item 
           label="Address Line 2"
           name="address2"
           labelCol={{ span: 24 }} 
           wrapperCol={{ span: 24 }}>
          <Input/>
          </Form.Item>
          <Form.Item 
           label="City"
           name="city"
           labelCol={{ span: 24 }} 
           wrapperCol={{ span: 24 }}>
          <Input/>
          </Form.Item>
          <Form.Item 
           label="State/Province"
           name="state"
           labelCol={{ span: 24 }} 
           wrapperCol={{ span: 24 }}>
          <Input/>
          </Form.Item>
          <Form.Item 
           label="Country "
           name="country"
           labelCol={{ span: 24 }} 
           wrapperCol={{ span: 24 }}>
          <Input/>
          </Form.Item>
          <Form.Item 
           label="Postal/ZIP Code "
           name="zipCode"
           labelCol={{ span: 24 }} 
           wrapperCol={{ span: 24 }}>
          <Input />
          </Form.Item>
          </div>
          <div className="btn-address">
          <Form.Item >
         <Button type="primary" htmlType="submit" loading={loadersavebtn} onClick={()=>saveComponent()} >
         Save Address
        </Button>
          </Form.Item>
          <Form.Item >
         <Button type="" htmlType="submit" id="edit-btn" loading={loaderEdit} onClick={()=>editComponent()}>
         Edit Address
        </Button>
          </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  )
}
