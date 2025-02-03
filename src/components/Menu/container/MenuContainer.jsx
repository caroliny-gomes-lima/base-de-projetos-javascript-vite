import React from "react";
import WebMenuRenderer from "../components/WebMenuRenderer";
import MobileMenuRender from "../components/MobileMenuRender";
import { useMediaQuery } from "@mui/material";
import { Theme } from "../../../config";
function MenuNavigation({ isOpenMenu, setMenuOpen }) {
  const isMobile = useMediaQuery(Theme.light.breakpoints.down("sm"));

  React.useEffect(() => {
    if (!isMobile) {
      setMenuOpen(false);
    }
  }, [isMobile, setMenuOpen]);

  return (
    <>
      {isMobile && <MobileMenuRender open={isOpenMenu} onClose={setMenuOpen} />}
      {!isMobile && <WebMenuRenderer />}
    </>
  );
}

export default MenuNavigation;
