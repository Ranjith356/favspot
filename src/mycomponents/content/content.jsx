import Card from "antd/es/card/Card"
import "./content.css"
import { Meta } from "antd/es/list/Item";
import BackroundAnimation from "./backroundAnimation";
import Model from "../model/model";

import { useState } from "react";


export default function Content() {
  const [showModel,setModel]=useState(false);
  const [collectedDatas,setCollectedDatas]=useState(null);
    const cardData = [
        {
          id: 1,
          images:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIclzD9gRzoleOoeVMivaAut7FlaZSRhn6oA&s","https://nobero.com/cdn/shop/files/aloe-green_ee108460-95d3-44ff-b4a0-cf0880393cf3.jpg?v=1712412662","https://nobero.com/cdn/shop/files/aloe-green_ee108460-95d3-44ff-b4a0-cf0880393cf3.jpg?v=1712412662","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIclzD9gRzoleOoeVMivaAut7FlaZSRhn6oA&s"],
          title: "T-shirt",
          description: "Looking for a plain white cotton T-shirt, size L, short sleeves, and a crew neck. Prefer a slim fit, lightweight fabric. Budget: $15–$20. Delivery within 2 days.",
        },
        {
          id: 2,
          images:["https://nobero.com/cdn/shop/files/aloe-green_ee108460-95d3-44ff-b4a0-cf0880393cf3.jpg?v=1712412662","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIclzD9gRzoleOoeVMivaAut7FlaZSRhn6oA&s","https://nobero.com/cdn/shop/files/aloe-green_ee108460-95d3-44ff-b4a0-cf0880393cf3.jpg?v=1712412662","https://nobero.com/cdn/shop/files/aloe-green_ee108460-95d3-44ff-b4a0-cf0880393cf3.jpg?v=1712412662","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIclzD9gRzoleOoeVMivaAut7FlaZSRhn6oA&s"],
          title: "Chair",
          description: "Looking for a modern dining chair in black or gray. Height around 18 inches, with a cushioned seat and wooden legs. Prefer lightweight but sturdy, suitable for a small apartment. Budget: $50–$70. Delivery within 3 days.",
        },
        {
          id: 3,
          images:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIclzD9gRzoleOoeVMivaAut7FlaZSRhn6oA&s","https://nobero.com/cdn/shop/files/aloe-green_ee108460-95d3-44ff-b4a0-cf0880393cf3.jpg?v=1712412662","https://nobero.com/cdn/shop/files/aloe-green_ee108460-95d3-44ff-b4a0-cf0880393cf3.jpg?v=1712412662","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIclzD9gRzoleOoeVMivaAut7FlaZSRhn6oA&s"],
          title: "T-shirt",
          description: "Looking for a plain white cotton T-shirt, size L, short sleeves, and a crew neck. Prefer a slim fit, lightweight fabric. Budget: $15–$20. Delivery within 2 days.",
        },
        {
          id: 4,
          images:["https://nobero.com/cdn/shop/files/aloe-green_ee108460-95d3-44ff-b4a0-cf0880393cf3.jpg?v=1712412662","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIclzD9gRzoleOoeVMivaAut7FlaZSRhn6oA&s","https://nobero.com/cdn/shop/files/aloe-green_ee108460-95d3-44ff-b4a0-cf0880393cf3.jpg?v=1712412662","https://nobero.com/cdn/shop/files/aloe-green_ee108460-95d3-44ff-b4a0-cf0880393cf3.jpg?v=1712412662","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIclzD9gRzoleOoeVMivaAut7FlaZSRhn6oA&s"],
          title: "Chair",
          description: "Looking for a modern dining chair in black or gray. Height around 18 inches, with a cushioned seat and wooden legs. Prefer lightweight but sturdy, suitable for a small apartment. Budget: $50–$70. Delivery within 3 days.",
        },
        {
          id: 5,
          images:["https://nobero.com/cdn/shop/files/aloe-green_ee108460-95d3-44ff-b4a0-cf0880393cf3.jpg?v=1712412662","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIclzD9gRzoleOoeVMivaAut7FlaZSRhn6oA&s","https://nobero.com/cdn/shop/files/aloe-green_ee108460-95d3-44ff-b4a0-cf0880393cf3.jpg?v=1712412662","https://nobero.com/cdn/shop/files/aloe-green_ee108460-95d3-44ff-b4a0-cf0880393cf3.jpg?v=1712412662","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIclzD9gRzoleOoeVMivaAut7FlaZSRhn6oA&s"],
          title: "T-shirt",
          description: "Looking for a plain white cotton T-shirt, size L, short sleeves, and a crew neck. Prefer a slim fit, lightweight fabric. Budget: $15–$20. Delivery within 2 days.",
        },
        {
          id: 6,
          images:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIclzD9gRzoleOoeVMivaAut7FlaZSRhn6oA&s","https://nobero.com/cdn/shop/files/aloe-green_ee108460-95d3-44ff-b4a0-cf0880393cf3.jpg?v=1712412662","https://nobero.com/cdn/shop/files/aloe-green_ee108460-95d3-44ff-b4a0-cf0880393cf3.jpg?v=1712412662","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIclzD9gRzoleOoeVMivaAut7FlaZSRhn6oA&s"],
          title: "Chair",
          description: "Looking for a modern dining chair in black or gray. Height around 18 inches, with a cushioned seat and wooden legs. Prefer lightweight but sturdy, suitable for a small apartment. Budget: $50–$70. Delivery within 3 days.",
        },
        {
          id: 7,
          images:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIclzD9gRzoleOoeVMivaAut7FlaZSRhn6oA&s","https://nobero.com/cdn/shop/files/aloe-green_ee108460-95d3-44ff-b4a0-cf0880393cf3.jpg?v=1712412662","https://nobero.com/cdn/shop/files/aloe-green_ee108460-95d3-44ff-b4a0-cf0880393cf3.jpg?v=1712412662","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIclzD9gRzoleOoeVMivaAut7FlaZSRhn6oA&s"],
          title: "T-shirt",
          description: "Looking for a plain white cotton T-shirt, size L, short sleeves, and a crew neck. Prefer a slim fit, lightweight fabric. Budget: $15–$20. Delivery within 2 days.",
        },
        {
          id: 8,
          images:["https://nobero.com/cdn/shop/files/aloe-green_ee108460-95d3-44ff-b4a0-cf0880393cf3.jpg?v=1712412662","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIclzD9gRzoleOoeVMivaAut7FlaZSRhn6oA&s","https://nobero.com/cdn/shop/files/aloe-green_ee108460-95d3-44ff-b4a0-cf0880393cf3.jpg?v=1712412662","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIclzD9gRzoleOoeVMivaAut7FlaZSRhn6oA&s"],
          title: "Chair",
          description: "Looking for a modern dining chair in black or gray. Height around 18 inches, with a cushioned seat and wooden legs. Prefer lightweight but sturdy, suitable for a small apartment. Budget: $50–$70. Delivery within 3 days.",
        },
      ];
      const modelClickEvent=(item)=>{
        setCollectedDatas(item);
        setModel(true)
      }
     const cencel=()=>{
      setModel(false);
      setCollectedDatas(null);
 }
    
  return (
    <div className="main-content">
   {cardData.map((item)=>(
    <Card 
     style={{
        width:300,
    }} 
    onClick={()=>{modelClickEvent(item)}}
    key={item.id}
    cover={<img alt="example" src={item.images[0]}></img>} 
    >
   <Meta 
        title={item.title}
        // description={item.description}
      />
    </Card>
))}
{
 collectedDatas&&showModel && <Model data={collectedDatas} onClose={cencel}/>
}
<BackroundAnimation  />
    </div>
  )
}
