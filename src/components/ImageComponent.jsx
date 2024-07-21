import React from "react";
import close from "../assets/close.png";

const ImageComponent = ({selectedItem,setShowImageComponent}) => {
  const closeHandler = () => {
    setShowImageComponent(false);
  }  
  return (
    <div className="imageComponentContainer">
      <div className="imageComponent">
      <img src={close} className="cross" onClick={closeHandler}/>
      <img src={selectedItem.frontImg} className="selectedImage" />  
      </div>
    </div>
  );
};

export default ImageComponent;
