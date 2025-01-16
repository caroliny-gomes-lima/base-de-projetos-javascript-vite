import { Input } from "@mui/material";
import styled from "styled-components";

const StyledInput = styled(Input)(({ theme }) => {
  const { palette: colors } = theme;
  return {
    width: "100%",
    height: "40px",
    borderRadius: "5px",
    border: `solid 1px ${colors.text.disabled}`,
    padding: "0 10px",
    color: colors.text.primary,
    "&:focus": {
      borderColor: colors.primary.main,
    },
  };
});

function InputComponent() {
  return <StyledInput />;
}
export default InputComponent;
