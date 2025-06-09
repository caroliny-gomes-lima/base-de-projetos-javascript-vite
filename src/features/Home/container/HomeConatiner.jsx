import React from "react";
import Styles from "../styles/HomeContainer.styles";
import { Fonts } from "../../../config";
import InputsTypes from "../components/InputsType.components";
import { TextComponent, TextGlobalLoader } from "../../../components";

const Text = TextGlobalLoader(TextComponent);

//HINT 1
function HomeConatiner() {
  //const texts = Texts["ptBr"].home;
  const [loading, setLoading] = React.useState(false);

  // const [fileUrl, setFileUrl] = React.useState("");
  // const [selectedFile, setSelectedFile] = React.useState({
  //   url: null,
  //   type: null,
  //   name: "Sem arquivo selecionado",
  // });

  const Submit = (data) => {
    console.log(data);
    // data.file = selectedFile.url;
    setLoading(true);
    alert(JSON.stringify(data));
  };

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
        <InputsTypes onSubmit={(data) => Submit(data)} loading={loading} />
      </Styles.content>
    </Styles.Container>
  );
}

export default HomeConatiner;

/*
1 - O escopo abaixo é o render do componente
*/
