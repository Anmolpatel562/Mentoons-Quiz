import React, { useState } from "react";
import ImageComponent from "./ImageComponent";

const Categories = ({ items }) => {
  const handleImageClick = (item) => {
    console.log(item);
    setSelectedItem(item);
    setShowImageComponent(true);
  };
  const [selectedItem, setSelectedItem] = useState(null);
  const [showImageComponent, setShowImageComponent] = useState(false);
  return (
    <section className="categories-section">
      {showImageComponent ? (
        <ImageComponent
          selectedItem={selectedItem}
          setShowImageComponent={setShowImageComponent}
        ></ImageComponent>
      ) : (
        <></>
      )}
      <h1
        style={{
          fontSize: "45px",
          fontWeight: "700",
          marginTop: "6.5rem",
          marginBottom: "2rem",
          textDecoration: "underline",
        }}
      >
        Categories
      </h1>
      <h1 style={{ fontSize: "35px" }}>Choose Your Quiz Adventure</h1>
      <div>
        <h3>Inventions and Inventors</h3>
        <p>
          Explore the world of innovation and the brilliant minds behind it.
        </p>
        <div className="frontImgContainer">
          {items.map((item) => (
            <div key={item.id} onClick={() => handleImageClick(item)}>
              <img className="frontImg" src={item.frontImg}></img>
              <div style={{ marginTop: ".5rem" }}>{item.name}</div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3>Murder Mysteries</h3>
        <p>Put on your detective hat and solve thrilling cases.</p>
      </div>
    </section>
  );
};

export default Categories;
