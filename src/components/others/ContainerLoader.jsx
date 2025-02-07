import React from "react";
import { CircularProgress } from "@mui/material";
import { styled } from "@mui/material/styles";

function LoadContainer(WrappedComponent) {
  return function HOC({ isLoading, ...props }) {
    return (
      <>
        {isLoading ? (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "60vh",
            }}
          >
            <CircularProgress size={100} style={{ color: "black" }} />
          </div>
        ) : (
          <WrappedComponent {...props} />
        )}
      </>
    );
  };
}

export default LoadContainer;
