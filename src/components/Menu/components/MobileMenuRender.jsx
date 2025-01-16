import React from "react";
import Styles from "../styles/Styles";
import { useLocation, useNavigate } from "react-router-dom";
import ItensMenuRenderer from "./ItensMenuRenderer";
import DefaultLogo from "../../others/DefaultLogo";
import { Drawer } from "@mui/material";

function MobileMenuRender({ open, onClose }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = React.useCallback(
    (path) => {
      if (location.pathname !== path) {
        navigate(path);
      }
    },
    [location.pathname, navigate]
  );

  const DrawMenu = () => {
    console.log("renderizou menu mobile");
    return (
      <Styles.Container>
        <Styles.MenuHeader>
          <DefaultLogo />
        </Styles.MenuHeader>
        <ItensMenuRenderer
          handleNavigation={handleNavigation}
          location={location}
        />
        MENU LATERAL
        <Styles.MenuFooter>
          <text>Footer</text>
        </Styles.MenuFooter>
      </Styles.Container>
    );
  };

  return (
    <Drawer
      variant="temporary"
      about="left"
      open={open}
      onClose={() => onClose(!open)}
    >
      {DrawMenu()}
    </Drawer>
  );
}

export default MobileMenuRender;
