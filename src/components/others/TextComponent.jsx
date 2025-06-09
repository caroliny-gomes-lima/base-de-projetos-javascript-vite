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
    textOverflow: "ellipsis",
    maxWidth: "250px",
    whiteSpace: "nowrap",
    overflow: "hidden",
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

/*OBERVAÇÕES: Mudar nome do componente para TextStyled.component e não
TextComponent porque a interpretação fica errada dando a entender que
texto é um componente*/
