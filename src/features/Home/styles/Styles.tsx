import { Paper } from "@mui/material";
import styled from "styled-components";

export const Container = styled(Paper)(({ theme }) => ({
    width: "100%",
    height: "100%",
    //minHeight: "100vh", // Altura mínima para garantir que o spinner centralize
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(2),
    backgroundColor: theme.palette.secondary.main,
    "&&.MuiPaper-elevation": {
        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
    },
}));

const content = styled.div(({ theme }) => {
    const { palette: colors, spacing } = theme;
    return {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        //border: "solid 2px red",
        margin: spacing(2, 0, 0, 0),
    }
})

const Styles = {
    Container,
    content,
}

export default Styles;