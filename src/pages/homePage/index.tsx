import React, { useEffect } from "react";
import "./homePage.scss";
import { GlobalFooter, GlobalHeader, ContentContainer } from "@components";

export const HomePage = () => {
  return (
    <>
      <GlobalHeader />
      <ContentContainer />
      <GlobalFooter />
    </>
  );
};
