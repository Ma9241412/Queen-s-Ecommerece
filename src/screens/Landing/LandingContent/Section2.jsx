import React from "react";
import { Row, Col } from "antd";
import img1 from "../../../assets/sec3.webp";
import img2 from "../../../assets/sec4.webp";
import { Typography } from "antd";

export const SectionTwo = () => {
  return (
    <div>
      <Row gutter={[0, 0]} justify="center">
        <Col lg={12}>
          <img src={img1} alt="Image 1" style={{ width: "100%" }} />
        </Col>
        <Col lg={12}>
          <img src={img2} alt="Image 2" style={{ width: "100%" }} />
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
        <Typography.Title style={{ textDecoration: "underline" }} level={5}>
          NEW IN MEN
        </Typography.Title>
        <Typography.Title style={{ textDecoration: "underline" }} level={5}>
          NEW IN WOMEN
        </Typography.Title>
      </div>
    </div>
  );
};
