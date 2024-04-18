import React, { useState } from "react";
import { Carousel, Typography } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import img1 from "../../../assets/sec01.webp";
import img2 from "../../../assets/sec2.webp";
import img3 from "../../../assets/sec3.webp";
import img4 from "../../../assets/sec4.webp";

const { Title } = Typography;

export const SectionFour = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const images = [img1, img2, img3, img4];

  return (
    <div style={{ position: "relative", width: "100%" }}>
      <div
        style={{
          position: "absolute",
          left: "10px",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        <LeftOutlined
          className="slider-arrow"
          onClick={handlePrevImage}
          style={{ fontSize: "24px", color: "white" }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          right: "10px",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        <RightOutlined
          className="slider-arrow"
          onClick={handleNextImage}
          style={{ fontSize: "24px", color: "white" }}
        />
      </div>
      <Carousel
        autoplay
        dotPosition="bottom"
        afterChange={() => {}}
        style={{ width: "100%" }}
      >
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Image ${index + 1}`}
              style={{ width: "100%" }}
            />
            <div
              className="slider-caption"
              style={{ textAlign: "center", marginTop: "10px" }}
            >
              <Title level={4} style={{ color: "white", fontWeight: "bold" }}>
                {index === currentImageIndex ? "Current Image Caption" : ""}
              </Title>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
