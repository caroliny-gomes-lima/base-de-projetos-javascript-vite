import styled from "styled-components";
import { FontFamily } from "../../../config";

const InputContainer = styled.div(({ theme }) => {
  const { palette: colors, spacing } = theme;
  return {
    width: "100%",
    height: "40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    // textOverflow: "ellipsis",
    padding: spacing(3, 2, 3, 2),
    backgroundColor: colors.primary.main,
    borderRadius: spacing(0.5),
    marginBottom: spacing(1),
  };
});
const ContainerLabel = styled.div(() => {
  return {
    display: "flex",
    alignContent: "center",
    justifyContent: "flex-start",
  };
});

const Label = styled.label(({ theme }) => {
  const { spacing } = theme;
  return {
    ...FontFamily.bold12,
    padding: 0,
    marginTop: spacing(1),
    marginBottom: spacing(1),
    transition: ".2s",
  };
});

const ImageBox = styled.div(({ theme }) => {
  const { palette: colors, spacing } = theme;
  return {
    width: "100%",
    height: "fit-content",
    margin: spacing(1),
    borderRadius: spacing(0.5),
    border: `solid 8px ${colors.primary.contrastText}`,
    alignSelf: "center",
  };
});

const Styles = {
  InputContainer,
  ContainerLabel,
  Label,
  ImageBox,
};

export default Styles;
