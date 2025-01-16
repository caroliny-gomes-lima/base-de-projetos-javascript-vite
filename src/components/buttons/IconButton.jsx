//import React from "react";
import styled from "styled-components";
import { IconButton } from "@mui/material";

const StyledButton = styled(IconButton)(({ theme }) => {
  const { spacing, palette: colors } = theme;
  return {
    "&&.MuiIconButton-root": {
      width: "fit-content",
      height: "fit-content",
      backgroundColor: colors.button.backgroundColor,
      color: colors.primary.main,
      borderRadius: spacing(5),
      "&:hover": {
        backgroundColor: colors.button.backgroundColor + "99",
      },
    },
  };
});

function IconButtonComponent({ name, children, onClick, ...props }) {
  //console.log("IconButton renderizou!");
  return (
    <StyledButton name={name} onClick={onClick} {...props}>
      {children}
    </StyledButton>
  );
}

export default IconButtonComponent;
