import React from "react";
import { Texts, colors } from "../../../config";
import { Button } from "@mui/material";
import { MdInfo } from "react-icons/md";
import {
  InputComponent,
  TooltipComponent,
  WithFormHolder,
} from "../../../components";
import { IoSearch } from "react-icons/io5";
function InputsRender() {
  const texts = Texts["ptBr"].home;
  return (
    <>
      <InputComponent
        name="name"
        label="Name"
        defaultValue="Teste"
        toolTip={
          <TooltipComponent text={texts.tooTip}>
            <MdInfo size={20} color={colors.blue} />
          </TooltipComponent>
        }
      />
      <Button style={{ marginTop: "10px", color: "black" }} type="submit">
        Submit
      </Button>
    </>
  );
}
//HINT 1
const InputsTypes = WithFormHolder(InputsRender, { mode: "onBlur" });

export default InputsTypes;

/* 1 - Com mode: "onBlur", a validação de um campo ocorre quando o usuário 
sai do campo (perde o foco), ou seja, no evento onBlur.*/
