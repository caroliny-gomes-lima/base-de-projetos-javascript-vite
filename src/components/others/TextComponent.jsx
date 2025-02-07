import styled from "styled-components";
import { Fonts } from "../../config";

const StyledText = styled.span(({ theme, $fontFamily, $fontSize, $color }) => {
  const { palette: colors } = theme;
  return {
    padding: 0,
    margin: 0,
    fontFamily: $fontFamily || Fonts.medium,
    fontSize: $fontSize || 12,
    color: $color || colors.text.primary,
  };
});

function TextComponent({ children, fontFamily, fontSize, color }) {
  return (
    <>
      <StyledText $fontFamily={fontFamily} $fontSize={fontSize} $color={color}>
        {children}
      </StyledText>
    </>
  );
}

export default TextComponent;
