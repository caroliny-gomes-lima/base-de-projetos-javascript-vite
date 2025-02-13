import React from "react";
import Styles from "../styles/HomeContainer.styles";
import { Fonts } from "../../../config";
import InputsTypes from "../components/InputsType.components";
import { TextComponent, TextGlobalLoader } from "../../../components";

const Text = TextGlobalLoader(TextComponent);

//O escopo abaixo é o render do componente
function HomeConatiner() {
  //const texts = Texts["ptBr"].home;

  // const handleFormSubmit = React.useCallback((data) => {
  //   console.log("#######", data);
  // }, []);

  return (
    <Styles.Container>
      <Text
        fontFamily={Fonts.bold}
        fontSize={20}
        loading={false}
        loadingSizes={["200px", "30px"]}
      >
        Componentes Inputs
      </Text>
      <Styles.content>
        <InputsTypes onSubmit={(data) => alert(JSON.stringify(data))} />
      </Styles.content>
    </Styles.Container>
  );
}

export default HomeConatiner;
