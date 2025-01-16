import styled from "styled-components";

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
    width: "25%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: theme.spacing(1),
    alignItems: "center",
    padding: spacing(0, 2, 0, 2),
    backgroundColor: colors.text.alternative,
    //border: "solid 2px blue",
  };
});

const UserArea = styled.div(() => {
  return {
    width: "30%",
    display: "flex",
    justifyContent: "flex-end",
    border: "solid 2px red",
  };
});

const TextName = styled.span(({ theme }) => {
  return {
    marginLeft: theme.spacing(0.5),
    color: "blue",
  };
});

const Styles = {
  Container,
  Content,
  LogoGroup,
  TextName,
  UserArea,
};

export default Styles;
