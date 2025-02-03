import styled from "styled-components";

const container = styled.div(({ theme }) => {
  const { palette: colors } = theme;
  return {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: colors.secondary.main,
  };
});

const Styles = {
  container,
};

export default Styles;
