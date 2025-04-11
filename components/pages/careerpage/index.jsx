"use client";

import SEO from "@/components/data/seo";
import SwitchTab from "../common/dark-light";
import HeaderOne from "@/components/layout/headers/header-one";
import BreadCrumb from "../common/breadcrumb";
import CareerMainPage from "./careermainpage";


const CareerPage = () => {
  return (
    <>
      <SEO pageTitle="Career" />
      <SwitchTab />
      <HeaderOne />
      <BreadCrumb title="Career" innerTitle="career" />
      <CareerMainPage />
    </>
  );
};

export default CareerPage;
