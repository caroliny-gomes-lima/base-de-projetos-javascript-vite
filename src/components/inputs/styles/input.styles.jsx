import styled from "styled-components";
import { Input } from "@mui/material";
import { FontFamily } from "../../../config";

const StyledInput = styled(Input)(({ theme }) => {
  const { palette: colors, spacing } = theme;
  return {
    "&&.MuiInput-root": {
      ...FontFamily.medium14,
      width: "100%",
      height: "40px",
      color: colors.text.primary,
      backgroundColor: colors.primary.main,
      padding: spacing(3, 2, 3, 2),
      borderRadius: spacing(0.5),
      "&:before, &:after": {
        borderBottom: "none !important",
      },
      "&:hover:not(.Mui-disabled):before": {
        borderBottom: "none",
      },
      "& .MuiInputBase-input": {
        padding: 0,
      },
      "& .MuiInputBase-input::placeholder": {
        color: colors.text.primary,
        opacity: 0.5,
      },
    },
  };
});

const Label = styled.label(({ $withError, theme }) => {
  const { palette: colors, spacing } = theme;
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
  StyledInput,
  Label,
};
export default Styles;
