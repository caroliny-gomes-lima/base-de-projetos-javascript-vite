import React from "react";
import { CircularProgress } from "@mui/material";
import styled from "styled-components";

const StyledCircularProgress = styled(CircularProgress)(
  ({ theme, $defaultColor }) => {
    const { palette: colors } = theme;
    return {
      "&&.MuiCircularProgress-root": {
        position: "absolute",
        color: $defaultColor ? $defaultColor : colors.text.primary,
        transition: ".5s",
        //opacity: $show ? 1 : 0,
      },
    };
  }
);

function LoadContainer(WrappedComponent) {
  return function HOC({ loading, size = 0, defaultLoadingColor, ...props }) {
    return (
      <>
        {loading ? (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "10vh",
            }}
          >
            <StyledCircularProgress
              size={size}
              $defaultColor={defaultLoadingColor}
            />
          </div>
        ) : (
          <WrappedComponent {...props} />
        )}
      </>
    );
  };
}

export default LoadContainer;
