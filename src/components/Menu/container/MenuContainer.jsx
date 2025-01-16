import React from "react";
import WebMenuRenderer from "../components/WebMenuRenderer";
import MobileMenuRender from "../components/MobileMenuRender";
import { useMediaQuery } from "@mui/material";
import { Theme } from "../../../config";
function MenuNavigation({ isOpenMenu, seOpenMenu }) {
  const isMobile = useMediaQuery(Theme.light.breakpoints.down("sm"));
  return (
    <>
      <MobileMenuRender open={isOpenMenu} onClose={seOpenMenu} />
      {!isMobile && <WebMenuRenderer />}
    </>
  );
}

export default MenuNavigation;
