import React from "react";
import Styles from "../styles/Styles";
import { Theme } from "../../../config";
import { useMediaQuery } from "@mui/material";
import IconButtonComponent from "../../buttons/IconButton";
import { Menu } from "@mui/icons-material";
import DefaultLogo from "../../others/DefaultLogo";
import InputComponent from "../../inputs/InputComponent";
import UserInfo from "./UserInfo";
//import whyDidYouRender from "@welldone-software/why-did-you-render";
function Header({ openMenu }) {
  //console.log("Header renderizou!");

  //whyDidYouRender(React);

  const isMobile = useMediaQuery(Theme.light.breakpoints.down("sm"));
  return (
    <Styles.Container>
      <Styles.Content>
        <Styles.LogoGroup>
          {isMobile && (
            <IconButtonComponent onClick={openMenu}>
              <Menu />
            </IconButtonComponent>
          )}
          <DefaultLogo />
        </Styles.LogoGroup>
        <InputComponent />
        <Styles.UserArea>
          <UserInfo />
        </Styles.UserArea>
      </Styles.Content>
    </Styles.Container>
  );
}

//Header.whyDidYouRender = true;

export default React.memo(Header);
