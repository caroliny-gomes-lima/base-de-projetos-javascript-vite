//import React from "react";
import Styles from "../styles/Styles";
import { TextComponent, TextGlobalLoader } from "../../../components";
import { Fonts } from "../../../config";

const Text = TextGlobalLoader(TextComponent);

function SettingsConatiner() {
  return (
    <Styles.container>
      <Text
        fontFamily={Fonts.bold}
        fontSize={20}
        loading={false}
        loadingSizes={["200px", "30px"]}
      >
        PAGINA DE CONFIGURAÇÕES
      </Text>
    </Styles.container>
  );
}

export default SettingsConatiner;
