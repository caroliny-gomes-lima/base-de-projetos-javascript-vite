import React from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import InputComponent from "./Input";
import { colors } from "@mui/material";

function InputPassword() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = React.useCallback(() => {
    setShowPassword(!showPassword);
  }, [setShowPassword, showPassword]);

  return (
    <>
      <InputComponent
        name="password"
        label="Password"
        type={showPassword ? "text" : "password"}
        icon={{
          Component: showPassword ? MdVisibilityOff : MdVisibility,
          color: colors.blue,
          submit: true,
        }}
        onSubmit={handleClickShowPassword}
      />
    </>
  );
}
//HINT 1

export default InputPassword;

/* 1 - Com mode: "onBlur", a validação de um campo ocorre quando o usuário 
sai do campo (perde o foco), ou seja, no evento onBlur.*/
