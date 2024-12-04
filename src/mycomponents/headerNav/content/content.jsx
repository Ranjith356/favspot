import Card from "antd/es/card/Card"
import "./content.css"
import { Meta } from "antd/es/list/Item";
import BackroundAnimation from "./backroundAnimation";
import Model from "../../model/model";
import { useState } from "react";


export default function Content() {
  const [showModel,setModel]=useState(false);
    const cardData = [
        {
          id: 1,
          image: "https://nobero.com/cdn/shop/files/aloe-green_ee108460-95d3-44ff-b4a0-cf0880393cf3.jpg?v=1712412662",
          title: "T-shirt",
          description: "Looking for a plain white cotton T-shirt, size L, short sleeves, and a crew neck. Prefer a slim fit, lightweight fabric. Budget: $15–$20. Delivery within 2 days.",
        },
        {
          id: 2,
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIclzD9gRzoleOoeVMivaAut7FlaZSRhn6oA&s",
          title: "Chair",
          description: "Looking for a modern dining chair in black or gray. Height around 18 inches, with a cushioned seat and wooden legs. Prefer lightweight but sturdy, suitable for a small apartment. Budget: $50–$70. Delivery within 3 days.",
        },
      ];
     const cencel=()=>{
      setModel(false)
     }
  return (
    <div className="main-content">
   {cardData.map((item)=>(
    <Card 
     style={{
        width:300,
    }} 
    onClick={()=>{setModel(true)}}
    key={item.id}
    cover={<img alt="example" src={item.image}></img>} 
    >
        <Meta 
        title={item.title}
        description={<button>view</button>}
      />
   
    </Card>
))}
{
  showModel && <Model onClose={cencel}/>
}
<BackroundAnimation  />
    </div>
  )
}
