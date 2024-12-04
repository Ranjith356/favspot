/* eslint-disable react/prop-types */
import { Button, Carousel, Modal } from "antd";
import "./model.css"
const contentStyle = {
  margin: "0 auto",
height:"200px",
  objectFit: "contain",
  background: '#364d79',
  };
  const data=[
    { id: 1, content: "https://nobero.com/cdn/shop/files/aloe-green_ee108460-95d3-44ff-b4a0-cf0880393cf3.jpg?v=1712412662" },
    { id: 2, content: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIclzD9gRzoleOoeVMivaAut7FlaZSRhn6oA&s" },
    { id: 3, content: "https://nobero.com/cdn/shop/files/aloe-green_ee108460-95d3-44ff-b4a0-cf0880393cf3.jpg?v=1712412662" },
    { id: 4, content: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIclzD9gRzoleOoeVMivaAut7FlaZSRhn6oA&s" },
  ]
export default function Model({onClose}) {

  return (
 <>
<Modal title={"user name"} open={true} onCancel={onClose} footer={[
        <Button key="ok" type="primary" className="order-picker-btn" onClick={()=>console.log("order-clicked")}>
          Pick-Order
        </Button>
      ]}>
<Carousel swipeToSlide draggable>
{
    data.map((v)=>(
        <div  key={v.id}> 
        <img style={contentStyle}src={v.content} alt="images" />
        </div>
    ))
}
</Carousel>
<div>
    <p>hi</p>
</div>
    </Modal>
 </>
  )
}
