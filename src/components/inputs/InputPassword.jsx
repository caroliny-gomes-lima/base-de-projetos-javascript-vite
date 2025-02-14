import React from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import InputComponent from "./Input";
import { colors } from "@mui/material";
import validations from "../FormConfig/Validations";
import { useFormContext } from "react-hook-form";

function InputPassword() {
  const {
    formState: { errors },
  } = useFormContext();
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
        required={true}
        error={errors.password}
        validation={validations.validPassword}
      />
    </>
  );
}

export default InputPassword;
