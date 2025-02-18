import React from "react";
import Styles from "../styles/HomeContainer.styles";
import { Fonts } from "../../../config";
import InputsTypes from "../components/InputsType.components";
import { TextComponent, TextGlobalLoader } from "../../../components";

const Text = TextGlobalLoader(TextComponent);

//O escopo abaixo é o render do componente
function HomeConatiner() {
  //const texts = Texts["ptBr"].home;
  const [fileUrl, setFileUrl] = React.useState("");
  const [selectedFile, setSelectedFile] = React.useState({
    url: null,
    type: null,
    name: "Sem arquivo selecionado",
  });

  // const handleFormSubmit = React.useCallback((data) => {
  //   console.log("#######", data);
  // }, []);

  const Submit = (data) => {
    console.log(data);
    data.file = selectedFile.url;
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
        <InputsTypes
          fileURL={fileUrl}
          setFileUrl={setFileUrl}
          selectedFile={selectedFile}
          setSelectedFile={setSelectedFile}
          onSubmit={(data) => Submit(data)}
        />
      </Styles.content>
    </Styles.Container>
  );
}

export default HomeConatiner;
