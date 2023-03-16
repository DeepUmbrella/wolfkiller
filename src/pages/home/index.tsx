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
      <GlobalHeader />
      <ContentContainer />
      <GlobalFooter />
      <UserAvatar
        displayMode={{ position: "fixed", bottom: "40px", right: "40px" }}
        size={46}
        avatarShape="circle"
        withBadge={{ dot: true }}
      />
    </>
  );
};

export default HomePage;
