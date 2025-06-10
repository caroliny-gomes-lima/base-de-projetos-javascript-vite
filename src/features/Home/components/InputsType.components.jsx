import React from "react";
import { Texts, colors } from "../../../config";
import { MdInfo } from "react-icons/md";
import Grid from "@mui/material/Grid2";
import {
  ButtonComponent,
  InputComponent,
  InputFile,
  InputPassword,
  SelectComponent,
  TooltipComponent,
  WithFormHolder,
} from "../../../components";
function InputsRender({ loading }) {
  const texts = Texts["ptBr"].home;

  const InputsNames = ["name", "number", "password", "select"];

  const ageList = [
    { value: "Oliver Hansen", label: "Oliver Hansen" },
    { value: "Van Henry", label: "Van Henry" },
    { value: "April Tucker", label: "April Tucker" },
    { value: "Ralph Hubbard", label: "Ralph Hubbard" },
    { value: "Omar Alexander", label: "Omar Alexander" },
  ];

  const ageTesteList = {
    teste1: [
      { value: 1, label: "Oliver Hansen" },
      { value: 2, label: "Van Henry" },
      { value: 3, label: "April Tucker" },
    ],
    teste2: [
      { value: 4, label: "Ralph Hubbard" },
      { value: 5, label: "Omar Alexander" },
    ],
  };

  //HINT 2
  const optionsGrouped = Object.entries(ageTesteList).map(
    ([group, options]) => ({
      group,
      options,
    })
  );

  return (
    <>
      <Grid container spacing={1}>
        <Grid size={{ xs: 2, sm: 4, md: 4, lg: 4 }}>
          <InputComponent
            name="name"
            label="Nome"
            placeholder={"digite aqui"}
            required
            toolTip={
              <TooltipComponent text={texts.tooTip}>
                <MdInfo size={20} color={colors.blue} />
              </TooltipComponent>
            }
          />
        </Grid>

        <Grid size={{ xs: 2, sm: 4, md: 4, lg: 4 }}>
          <InputComponent
            name="number"
            label="Numero"
            type="number"
            placeholder={"0"}
            required
          />
        </Grid>

        <Grid size={{ xs: 2, sm: 4, md: 4, lg: 4 }}>
          <InputPassword />
        </Grid>

        <Grid size={{ xs: 2, sm: 4, md: 4, lg: 4 }}>
          <SelectComponent
            name="select"
            label="Seleção"
            options={ageList}
            required
          />
        </Grid>

        <Grid size={{ xs: 2, sm: 4, md: 4, lg: 4 }}>
          <SelectComponent
            name="selectWithChec"
            label="Seleção com checkbox"
            withTags
            options={ageList}
          />
        </Grid>

        <Grid size={{ xs: 2, sm: 4, md: 4, lg: 4 }}>
          <SelectComponent
            name="selectGrouped"
            label="Seleção agrupada"
            optionsGrouped={optionsGrouped}
          />
        </Grid>
        <Grid size={{ xs: 2, sm: 4, md: 4, lg: 4 }}>
          <InputFile label="Enviar arquivo" uploadButton />
        </Grid>

        <Grid size={{ xs: 2, sm: 4, md: 4, lg: 4 }}>
          <InputFile label="Baixar arquivo" downloadButton />
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid size={{ xs: 2, sm: 2, md: 2, lg: 2 }}>
          <ButtonComponent
            type="submit"
            label={Texts["ptBr"].confirm}
            loading={loading}
            disabledUntil={InputsNames}
          ></ButtonComponent>
        </Grid>
      </Grid>
    </>
  );
}
//HINT 1
const InputsTypes = WithFormHolder(InputsRender);

export default InputsTypes;

/*
HINT 1 - Com mode: "onBlur", a validação de um campo ocorre quando o usuário 
sai do campo (perde o foco), ou seja, no evento onBlur.
*/

/*
HINT 2 = tratamento do objeto para que retorne grupos de arrays de opções com
  o metodo entries 
  https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
*/
