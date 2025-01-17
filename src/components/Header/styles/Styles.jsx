import styled from "styled-components";
import { FontFamily } from "../../../config";

const Container = styled.div(({ theme }) => {
  const { palette: colors } = theme;
  return {
    width: "100%",
    height: "100%",
    //position: "relative",
    backgroundColor: colors.secondary.main,
    //border: "solid 2px blue",
  };
});

const Content = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: theme.spacing(10),
    alignItems: "center",
    padding: spacing(0, 2, 0, 0),
    width: "100%",
    height: "fit-content",
  };
});

const LogoGroup = styled.div(({ theme }) => {
  const { spacing, palette: colors } = theme;
  return {
    minWidth: "202px", // Pode ser ajustado com base no layout
    maxWidth: "230px", // Pode ser ajustado com base no layout
    width: "230px", // Pode ser ajustado com base no layout0%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: theme.spacing(2),
    alignItems: "center",
    padding: spacing(0, 2, 0, 2),
    backgroundColor: colors.text.alternative,
    flexGrow: 0, // Impede o crescimento além do tamanho definido
    flexShrink: 0, // Impede que ele encolha
    //border: "solid 2px blue",
  };
});

const UserArea = styled.div(() => {
  return {
    maxWidth: "35%",
    display: "flex",
    flexShrink: 1,
    justifyContent: "space-around",
    gap: 10,
    padding: 10,
    //border: "solid 2px red",
  };
});

const Infos = styled.div(() => {
  return {
    display: "flex",
    flexDirection: "column",
  };
});

const TextName = styled.span(({ theme }) => {
  const { palette: colors } = theme;
  return {
    ...FontFamily.bold14,
    marginLeft: theme.spacing(0.5),
    color: colors.text.primary,
  };
});

const Styles = {
  Container,
  Content,
  LogoGroup,
  TextName,
  Infos,
  UserArea,
};

export default Styles;
