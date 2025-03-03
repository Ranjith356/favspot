import ImgCrop from "antd-img-crop"
import "./PostProduct.css"
import { Upload } from "antd"
import { useState } from "react";
export default function PostProduct() {
  const [fileList, setFileList] = useState([]);
  console.log(fileList)
  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };
  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };
  return (
    <>
    <div className="postproduct-container">
    <div className="postproduct-container-coloumn-1">
      <div className="postproduct-container-coloumn-1-contend-box">
      <div className="content-container">
      <div className="content1">{"🎉Share Your Favorite Product & Spread Happiness!🎉" }</div>
      <div className="content2">{"❤️One Product, One Smile!❤️"}</div>
      </div>
    <ImgCrop rotationSlider>
      <Upload
        action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
        listType="picture-card"
        fileList={fileList}
        onChange={onChange}
        onPreview={onPreview}
      >
        {fileList.length < 5 && '+ Upload'}
      </Upload>
    </ImgCrop>
    </div>
    </div>
    <div className="postproduct-container-coloumn-2">
    </div>
    </div>
    </>
  )
}
