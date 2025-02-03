//import React from "react";
import { TextComponent } from "../../../components";
import Styles from "../styles/Styles";

function LoginConatiner() {
  return (
    <Styles.container>
      <TextComponent
        loading={false}
        loadingSizes={["200px", "30px"]} // Tamanho do Skeleton
      >
        LOGIN
      </TextComponent>
    </Styles.container>
  );
}

export default LoginConatiner;
