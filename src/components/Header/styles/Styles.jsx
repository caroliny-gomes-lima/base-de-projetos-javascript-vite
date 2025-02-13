import styled from "styled-components";
import { FontFamily } from "../../../config";
import { Paper } from "@mui/material";

const Container = styled(Paper)(({ theme }) => {
  const { palette: colors } = theme;
  return {
    width: "auto",
    height: "auto",
    position: "relative",
    backgroundColor: colors.secondary.main,
    "&&.MuiPaper-elevation": {
      boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
    },
  };
});

const Content = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: spacing(0, 2, 0, 0),
    width: "100%",
    height: "fit-content",
  };
});

const LogoGroup = styled.div(({ theme }) => {
  const { spacing, palette: colors } = theme;
  return {
    width: "40vh",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: theme.spacing(2),
    alignItems: "center",
    padding: spacing(0, 2, 0, 2),
    backgroundColor: colors.text.alternative,
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
