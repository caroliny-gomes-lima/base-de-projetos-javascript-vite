import styled from "styled-components";
import { createTheme, IconButton, TextField } from "@mui/material";
import { colors, FontFamily } from "../../../config";

const theme = createTheme({
  components: {
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          ...FontFamily.medium12,
          width: "100%",
        },
        option: {
          "&:hover": {
            backgroundColor: colors.blue,
            color: colors.white,
          },
          "&[aria-selected='true']": {
            backgroundColor: colors.blue + 90,
            color: colors.white,
          },
        },
      },
    },
  },
});

const StyledBox = styled.div(({ theme }) => {
  const { palette: colors, spacing } = theme;
  return {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "40px",
    backgroundColor: colors.primary.main,
    borderRadius: spacing(0.5),
    padding: spacing(0, 1),
  };
});

const StyledInput = styled(TextField)(() => {
  return {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: "none",
      },
      "&:hover fieldset": {
        border: "none",
      },
      "&.Mui-focused fieldset": {
        border: "none",
      },
    },
  };
});

const StyledIconButton = styled(IconButton)(() => {
  return {
    "&&.MuiIconButton-root": {
      width: "35px",
      height: "35px",
      alignSelf: "center",
    },
  };
});

const Styles = {
  theme,
  StyledBox,
  StyledInput,
  StyledIconButton,
};

export default Styles;
