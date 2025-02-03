import React from "react";
import { CircularProgress } from "@mui/material";
import { styled } from "@mui/material/styles";

const LoadContainer = (WrappedComponent) => {
  const HOC = ({ isLoading, ...props }) => {
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

  HOC.displayName = `LoadContainer(${
    WrappedComponent.displayName || WrappedComponent.name || "Component"
  })`;

  return HOC;
};

export default LoadContainer;
