import styled from "styled-components";
import { FontFamily } from "../../../config";
import { MenuItem, Select } from "@mui/material";

const StyledSelect = styled(Select)(({ theme }) => {
  const { palette: colors, spacing } = theme;
  return {
    "&&.MuiSelect-root": {
      ...FontFamily.medium14,
      width: "100%",
      height: "40px",
      color: colors.text.primary,
      backgroundColor: colors.primary.main,
      padding: spacing(3, 2, 3, 2),
      borderRadius: spacing(0.5),
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
  };
});

const StyledMenuItem = styled(MenuItem)(({ theme }) => {
  const { palette: colors } = theme;
  return {
    "&&.MuiMenuItem-root": {
      ...FontFamily.medium14,
      "&:hover": {
        backgroundColor: colors.button.backgroundColor,
        color: colors.button.contrastText,
      },
      "&:focus": {
        backgroundColor: colors.button.backgroundColor + "99",
        color: colors.button.contrastText,
      },
    },
  };
});

const ContainerLabel = styled.div(() => {
  return {
    display: "flex",
    alignContent: "center",
    justifyContent: "flex-start",
  };
});

const Label = styled.label(({ theme, $withError }) => {
  const { spacing, palette: colors } = theme;
  return {
    ...FontFamily.bold12,
    padding: 0,
    marginTop: spacing(1),
    marginBottom: spacing(1),
    color: $withError ? colors.error.main : colors.primary.contrastText,
    transition: ".2s",
  };
});

const Styles = {
  StyledSelect,
  StyledMenuItem,
  ContainerLabel,
  Label,
};

export default Styles;
