/* eslint-disable react/prop-types */
import { Button, Carousel, Modal } from "antd";
import "./model.css"
export default function Model({onClose,data}) {

  return (
 <>
<Modal  open={true} onCancel={onClose} footer={[
        <Button key="ok" type="primary" className="order-picker-btn" onClick={()=>console.log("order-clicked",data)}>
          Pick-Order
        </Button>
      ]}>
<Carousel swipeToSlide draggable>
{
 data.images.map((v,index)=>(
  <img
  key={index}
  src={v}
  alt={`Image ${index + 1}`}
/>
 ))
}
</Carousel>
<p>{data.description}</p>
    </Modal>
 </>
  )
}
