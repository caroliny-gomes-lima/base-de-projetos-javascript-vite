//import React from "react";
import Styles from "./styles/iconButton.styles";

function IconButtonComponent({ name, children, onClick, ...props }) {
  //console.log("IconButton renderizou!");
  return (
    <Styles.StyledButton name={name} onClick={onClick} {...props}>
      {children}
    </Styles.StyledButton>
  );
}

export default IconButtonComponent;
