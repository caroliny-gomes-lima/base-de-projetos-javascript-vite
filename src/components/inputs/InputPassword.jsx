import React from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import InputComponent from "./Input";
import { colors } from "@mui/material";
import validations from "../FormConfig/Validations";

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
        placeholder={"digite aqui"}
        type={showPassword ? "text" : "password"}
        required
        validation={validations.validPassword}
        icon={{
          Component: showPassword ? MdVisibilityOff : MdVisibility,
          color: colors.blue,
          submit: false,
          buttonProps: {
            onClick: handleClickShowPassword,
          },
        }}
      />
    </>
  );
}

export default InputPassword;
