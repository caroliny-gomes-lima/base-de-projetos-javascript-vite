import styled from "styled-components";
import SvgImage from "./svgImage";

const LogoContainr = styled.div(() => {
  return {
    width: "fit-content",
    height: "fit-content",
    flexShrink: 0,
  };
});

function DefaultLogo() {
  return (
    <LogoContainr>
      <SvgImage.Logo
        style={{ marginTop: "5px", width: "160px", height: "60px" }}
      />
    </LogoContainr>
  );
}

export default DefaultLogo;
