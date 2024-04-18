import React from "react";
import { Row, Col } from "antd";
import img1 from "../../../assets/sec5.webp";
import { Typography } from "antd";

export const SectionThree = () => {
  return (
    <div>
      <Row gutter={[0, 0]} justify="center">
        <Col lg={24}>
          <img src={img1} alt="Image 1" style={{ width: "100%" }} />
        </Col>
      </Row>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingInline: 200,
          marginBottom: 20,
        }}
      >
        <Typography.Title level={5}>PA 4 SNEAKERS</Typography.Title>
        <Typography.Title level={5}>SHOP NOW</Typography.Title>
      </div>
    </div>
  );
};
