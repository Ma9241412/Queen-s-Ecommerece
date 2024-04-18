import React, { useState } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Typography } from "antd";
import img1 from "../../../assets/sec01.webp";
import img2 from "../../../assets/sec2.webp";

const images = [img1, img2];

export const SectionOne = () => {
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

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        paddingTop: 60,
        width: "100%",
        position: "relative",
        overflowX: "hidden",
        flexDirection: "column", // Prevent horizontal scrolling
      }}
    >
      <div style={{ maxWidth: 1800, width: "100%" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            position: "relative",
          }}
        >
          <img
            src={images[currentImageIndex]}
            alt=""
            style={{ width: "100%" }}
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              transform: "translateY(-45%)",
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              padding: "0 10px",
            }}
          >
            <LeftOutlined
              onClick={handlePrevImage}
              style={{ fontSize: 50, color: "white", fontWeight: 800 }}
            />
            <RightOutlined
              onClick={handleNextImage}
              style={{ fontSize: 50, color: "white", marginRight: 10 }}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingInline: 200,
            marginBottom: 20,
          }}
        >
          <Typography.Title level={4}>TRACKSUIT MAN</Typography.Title>
          <Typography.Title level={4}>SHOP NOW</Typography.Title>
        </div>
      </div>
    </div>
  );
};
