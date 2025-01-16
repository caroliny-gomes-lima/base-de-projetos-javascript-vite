import styled from "styled-components";

const Container = styled.div(() => {
  return {
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    //border: "solid 2px yellow",
  };
});

const Content = styled.div(() => {
  return {
    display: "flex",
    width: "100%",
    height: "calc(100% - 60px)",
  };
});

const PageContainer = styled.div(({ theme, $menuHeight }) => {
  const { palette: colors } = theme;
  return {
    width: "100%",
    height: `calc(100vh - ${$menuHeight ? $menuHeight + "px" : 0}px)`,
    transition: "1s",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    overflowY: "auto",
    overflowX: "hidden",
    backgroundColor: colors.primary.main,
    //border: "solid 2px red",
  };
});

const PageContent = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
    padding: spacing(2),
  };
});

const Styles = {
  Container,
  Content,
  PageContainer,
  PageContent,
};

export default Styles;
