import React from "react";
import Styles from "../styles/Styles";
import {
  InputComponent,
  TextComponent,
  TextGlobalLoader,
} from "../../../components";
import { Fonts } from "../../../config";
import { Button } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";

const Text = TextGlobalLoader(TextComponent);
//const Load = LoadContainer(Styles.Container);

//O escoppo abaixo é o render do componente
function HomeConatiner() {
  const methods = useForm(); // Inicializa o formulário
  const onSubmit = (data) => console.log(data);
  console.log("InputComponent renderizou!");
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
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <InputComponent name="inputTest" />
            <Button style={{ marginTop: "10px", color: "black" }} type="submit">
              Submit
            </Button>
          </form>
        </FormProvider>
      </Styles.content>
    </Styles.Container>
  );
}

export default HomeConatiner;
