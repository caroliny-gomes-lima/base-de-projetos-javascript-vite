import React from "react";
import { Texts, colors } from "../../../config";
import { Button } from "@mui/material";
import { MdInfo } from "react-icons/md";
import Grid from "@mui/material/Grid2";
import {
  InputComponent,
  InputFile,
  InputPassword,
  TooltipComponent,
  WithFormHolder,
} from "../../../components";

function InputsRender({ ...fileProps }) {
  const texts = Texts["ptBr"].home;

  return (
    <>
      <Grid container spacing={1}>
        <Grid size={{ xs: 2, sm: 4, md: 4, lg: 4 }}>
          <InputComponent
            name="name"
            label="Name"
            placeholder={"digite"}
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
            label="Number"
            type="number"
            defaultValue="0"
          />
        </Grid>

        <Grid size={{ xs: 2, sm: 4, md: 4, lg: 4 }}>
          <InputPassword />
        </Grid>

        <Grid size={{ xs: 2, sm: 4, md: 4, lg: 4 }}>
          <InputFile
            uploadButton
            fileURL={fileProps.fileURL}
            setFileUrl={fileProps.setFileUrl}
            setSelectedFile={fileProps.setSelectedFile}
            selectedFile={fileProps.selectedFile}
          />
        </Grid>
      </Grid>

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
