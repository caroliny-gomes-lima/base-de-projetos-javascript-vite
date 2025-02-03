import React from "react";
import Styles from "../styles/Styles";
import { useLocation, useNavigate } from "react-router-dom";
import ItensMenuRenderer from "./ItensMenuRenderer";
import DefaultLogo from "../../others/DefaultLogo";
import { Drawer } from "@mui/material";
import { Close } from "@mui/icons-material";

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

  return (
    <Drawer
      variant="temporary"
      about="left"
      open={open}
      onClose={() => onClose(!open)}
    >
      {open && (
        <Styles.Container menuMobile>
          <Styles.MenuHeader>
            <DefaultLogo />
            <Styles.CloseButtom>
              <Close />
            </Styles.CloseButtom>
          </Styles.MenuHeader>
          <ItensMenuRenderer
            handleNavigation={handleNavigation}
            location={location}
          />
          <Styles.MenuFooter>
            <Styles.StyledText>Company Web Admin</Styles.StyledText>
            <Styles.StyledText>Version 0.0.1</Styles.StyledText>
          </Styles.MenuFooter>
        </Styles.Container>
      )}
    </Drawer>
  );
}

export default React.memo(MobileMenuRender);
