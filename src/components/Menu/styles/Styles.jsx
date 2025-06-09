import styled from "styled-components";
import { Button, Icon, IconButton } from "@mui/material";
import { FontFamily } from "../../../config";

const Container = styled.div(({ theme, menuMobile }) => {
  const { palette: colors } = theme;
  return {
    width: "40vh",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: colors.text.alternative,
    position: "relative",
    boxShadow: "0px 0px 4px #00000014",
    padding: menuMobile ? theme.spacing(2, 2, 2, 2) : theme.spacing(5, 2, 2, 2),
    borderTop: menuMobile ? "none" : "solid 2px white",
    flexShrink: 0,
  };
});

const Content = styled.div(({ theme }) => {
  return {
    width: "auto",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    gap: theme.spacing(1),
    //border: "solid 1px white",
  };
});

const MenuHeader = styled.div(({ theme }) => {
  return {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: theme.spacing(2),
    alignItems: "center",
  };
});

const CloseButtom = styled(IconButton)(({ theme }) => {
  const { palette: colors } = theme;
  return {
    "&&.MuiIconButton-root": {
      color: colors.secondary.main,
      alignSelf: "flex-start",
      "&:hover": {
        opacity: 0.6,
      },
    },
  };
});

const MenuFooter = styled.div(({ theme }) => {
  return {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: theme.spacing(1, 2),
    alignItems: "center",
    //backgroundColor: "black",
  };
});

//APAGAR ESTILIZAÇÃO DE TEXTO E CRIAR COMPONENTE DE TEXTO GLOBAL (HOC)
const StyledText = styled.div(({ theme }) => {
  const { palette: colors } = theme;
  return {
    ...FontFamily.semibold10,
    color: colors.text.secondary,
  };
});

const NavigationButton = styled(Button)(({ theme, $changeColor }) => {
  const { palette: colors, spacing } = theme;
  return {
    "&&.MuiButton-root": {
      width: "100%",
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      padding: spacing(0, 2),
      backgroundColor: $changeColor
        ? colors.secondary.main
        : colors.button.backgroundColor,
      color: $changeColor ? colors.text.primary : colors.button.contrastText,
      border: `solid 2px ${colors.secondary.main}`,
      borderRadius: spacing(5),
      textTransform: "none",

      "& svg": {
        width: "25px",
        height: "25px",
        fill: "currentColor",
      },
    },
  };
});

//AJUSTAR DEPOIS PARA TIRAR ESTILIZAÇÃO DE TEXTO
const PageNavigationButton = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    ...FontFamily.semibold14,
    display: "flex",
    flexDirection: "row",
    gap: spacing(1),
    alignItems: "center",
  };
});

export const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0); // leve opacidade para a sobreposição
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999; // coloca o overlay acima de outros elementos
`;

const Styles = {
  MenuHeader,
  MenuFooter,
  Container,
  Content,
  CloseButtom,
  NavigationButton,
  PageNavigationButton,
  LoadingOverlay,
  StyledText,
};

export default Styles;
