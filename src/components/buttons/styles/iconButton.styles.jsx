import { IconButton } from "@mui/material";
import styled from "styled-components";

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

const Styles = {
  StyledButton,
};

export default Styles;
