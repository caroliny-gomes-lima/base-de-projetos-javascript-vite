import { IconButton, Tooltip } from "@mui/material";
import styled from "styled-components";

const StyledIconButton = styled(IconButton)(() => {
  return {
    "&&.MuiIconButton-root": {
      "&:hover": {
        backgroundColor: "unset",
      },
    },
  };
});

function TooltipComponent({ text, children }) {
  return (
    <Tooltip title={text} arrow>
      <StyledIconButton size="small">{children}</StyledIconButton>
    </Tooltip>
  );
}

export default TooltipComponent;
