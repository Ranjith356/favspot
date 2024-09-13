import { Input } from "antd";
import "./cloth.css";
import TextArea from "antd/es/input/TextArea";
import { useDispatch } from 'react-redux';
import { updateFormData } from "../tookitStore/StoreSlice";
export default function ClothForm() {
    const dispatch = useDispatch();
   
   const handleChange = (e) => {
      const { name, value } = e.target;
      dispatch(updateFormData({ [name]: value }));
    };
  return (
    <>
      <div className="full-content">
        <div className="cloth-type">
          <label className="inpute-label">Measurements</label>
          <Input placeholder="Height" className="cloth-catagory" name="Height" onChange={handleChange} />
          <Input placeholder="Weight" className="cloth-catagory" name="Weight" onChange={handleChange} />
          <Input placeholder="Chest/Bust" className="cloth-catagory" name="Chest/Bust" onChange={handleChange}/>
          <Input placeholder="Waist" className="cloth-catagory" name="Waist"  onChange={handleChange} />
          <Input placeholder="Hips" className="cloth-catagory" name="Hips" onChange={handleChange}/>
          <Input placeholder="Inseam" className="cloth-catagory" name="Inseam"  onChange={handleChange}/>
          <Input placeholder="Sleeve Length" className="cloth-catagory" name="SleeveLength"  onChange={handleChange}/>
        </div>
        <div className="cloth-size">
          <label  className="inpute-label">Size</label>
          <Input placeholder="Standard Size" className="cloth-StandardSize" name="StandardSize" onChange={handleChange} />
          <Input placeholder="Custom Size" className="cloth-CustomSize" name="CustomSize" onChange={handleChange}/>
        </div>
        <div className="footer-text-area">
        <div className="Special-Instructions">
          <label  className="inpute-label">Additional Details</label>
          <TextArea
          name="SpecialInstructions"
            showCount
            maxLength={100}
            // placeholder="Special Instructions"
            onChange={handleChange}
            className="text-area"
          />
        </div>
        <div className="Address-Details">
          <label  className="inpute-label">Address</label>
          <TextArea
          className="text-area"
          name="AddressDetails"
            showCount
            maxLength={100}
            // placeholder="Address Details"
            onChange={handleChange}
          />
        </div>
        </div>
      </div>
    </>
  );
}
