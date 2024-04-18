import React from "react";
import { Layout, Menu } from "antd";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { SectionOne } from "./LandingContent/Section1";
const { Header, Content } = Layout;

export const HeaderComp = () => {
  return (
    <>
      <Layout>
        <Header>
          <div style={{ backgroundColor: "#C81D31", width: "100%" }}>
            <span
              style={{
                color: "black",
                fontSize: 17,
                display: "flex",
                justifyContent: "center",
                textDecoration: "underline",
                fontWeight: "700",
                letterSpacing: ".05em",
              }}
            >
              SUBSCRIBE TO NEWSLETTER AND GET 15% OFF ON YOUR FIRST PURCHASE.
            </span>
          </div>
          <Menu
            style={{ alignItems: "center", height: 60 }}
            theme="light"
            mode="horizontal"
          >
            <Logo style={{ height: 32, width: 200, marginRight: 16 }} />{" "}
            <div style={{ position: "absolute", left: "25%" }}>
              <Menu.Item key="1">PROMO</Menu.Item>
              <Menu.Item key="2">MAN</Menu.Item>
              <Menu.Item key="3">WOMAN</Menu.Item>
              <Menu.Item key="4">EYEWEAR</Menu.Item>{" "}
              <Menu.Item key="5">KIDS</Menu.Item>
              <Menu.Item key="6">ICONS</Menu.Item>
              <Menu.Item key="7">COLLAB</Menu.Item>
              <Menu.Item key="8">EXCLUSIVE</Menu.Item>
            </div>
            <div style={{ position: "absolute", left: "71%" }}>
              <Menu.Item key="9">SEARCH</Menu.Item>
              <Menu.Item key="10">EN</Menu.Item>
              <Menu.Item key="11">PK/$</Menu.Item>
              <Menu.Item key="12">LOGIN</Menu.Item>{" "}
              <Menu.Item key="13">WISHLIST(0)</Menu.Item>
              <Menu.Item key="14">BAG(0)</Menu.Item>
            </div>
          </Menu>
        </Header>
      </Layout>
    </>
  );
};
