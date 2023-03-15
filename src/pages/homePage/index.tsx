import React, { useEffect } from "react";
import "./homePage.scss";
import {
  GlobalFooter,
  GlobalHeader,
  ContentContainer,
  UserAvatar,
} from "@components";

export const HomePage = () => {
  return (
    <>
      <UserAvatar />
      <GlobalHeader />
      <ContentContainer />
      <GlobalFooter />
    </>
  );
};
