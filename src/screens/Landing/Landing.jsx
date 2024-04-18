import React from "react";
import { Layout } from "antd";
import { HeaderComp } from "./Header";
import { SectionOne } from "./LandingContent/Section1";
import { SectionTwo } from "./LandingContent/Section2";
import { SectionThree } from "./LandingContent/Section3";
import { SectionFour } from "./LandingContent/Section4";

const { Content } = Layout;

export const LandingPage = () => {
  return (
    <>
      <HeaderComp />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </>
  );
};
