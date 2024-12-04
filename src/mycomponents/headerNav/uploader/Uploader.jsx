import { Button, Upload } from "antd";
import ImgCrop from "antd-img-crop";
import "./uploader.css";
import { useState } from "react";
import ClothForm from "../clothDetails/clothForm";
import { useSelector } from "react-redux";
// import { updateFormData } from "../tookitStore/StoreSlice";
export default function Uploader(prop) {
  // const dispatch = useDispatch();
  const [fileList, setFileList] = useState([]);
  const formData = useSelector((state) => state.formData);
  const onChange = ( { fileList: newFileList }) => {
    console.log(newFileList)
    newFileList.forEach((file)=> {
      console.log(file)
      const thumbUrl = file.thumbUrl;
      
        if (thumbUrl==="") {
     console.log("thumUrl NOT generated")
      // dispatch(updateFormData({ ["base64Value"]: base64String }));
    } else {
      console.log(thumbUrl);
    }}
    )
    setFileList(newFileList);
  };
  const handlePreview = async (file) => {
    console.log(file);
  }

  const formCompletion = () => {
    console.log(formData)
  };
  return (
      <div className="uploader-content">
        {prop.selectValue&&(
        <ImgCrop rotationSlider>
          <Upload action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload" listType="picture-card" onChange={onChange} onPreview={handlePreview}>
            {fileList.length < 5 && "+ Upload"}
          </Upload>
        </ImgCrop>
        )}
         {prop.selectValue===1 ? (
          <>
        <ClothForm />
        <Button
          type="primary"
          htmlType="submit"
          className="login-bt"
          onClick={formCompletion}
        >
          Continue
        </Button>
        </>
         ):null}
      </div>
   
  );
}
