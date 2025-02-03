import styled from "styled-components";
import { Input } from "@mui/material";
import { FontFamily } from "../../config";
import { Controller, useForm, useFormContext } from "react-hook-form";

const StyledInput = styled(Input)(({ theme }) => {
  const { palette: colors, spacing } = theme;
  return {
    "&&.MuiInput-root": {
      ...FontFamily.medium12,
      width: "100%",
      height: "40px",
      color: colors.text.primary,
      backgroundColor: colors.primary.main,
      padding: theme.spacing(1.962, 2.5),
      borderRadius: spacing(1),
      "&:before, &:after": {
        borderBottom: "none !important",
      },
      "&:hover:not(.Mui-disabled):before": {
        borderBottom: "none",
      },
      "& .MuiInputBase-input": {
        padding: 0,
      },
    },
  };
});

function InputComponent({ label, name }) {
  const { control } = useFormContext();
  console.log("InputComponent renderizou!");
  return (
    <>
      <Controller
        name={name}
        control={control}
        rules={{ required: false }}
        render={({ field }) => (
          <div>
            {label && <label>{label}</label>}
            <StyledInput {...field} />
          </div>
        )}
      />
    </>
  );
}
export default InputComponent;
