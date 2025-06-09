import { Button, CircularProgress } from "@mui/material";
import styled from "styled-components";
import { FontFamily } from "../../../config";

const StyledButton = styled(Button)(({ theme, $loadingButton, $disabled }) => {
  const { spacing, palette: colors } = theme;
  return {
    "&&.MuiButton-root": {
      ...FontFamily.semibold14,
      width: "100%",
      height: "50px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: spacing(5),
      color: colors.text.secondary,
      backgroundColor: $loadingButton
        ? colors.button.backgroundColor + "99"
        : $disabled
        ? colors.button.disabled
        : colors.button.backgroundColor,
      textTransform: "Uppercase",
      flexShrink: 0,
      overflow: "hidden",
      ".MuiButton-startIcon": {
        display: $loadingButton ? "none" : "flex",
        color: colors.text.secondary,
        width: 20,
      },
    },
  };
});

const StyledLoading = styled(CircularProgress)(({ theme }) => {
  const { palette: colors } = theme;
  return {
    "&&.MuiCircularProgress-root": {
      position: "absolute",
      color: colors.text.secondary,
      transition: ".5s",
    },
  };
});

const Styles = {
  StyledButton,
  StyledLoading,
};

export default Styles;
