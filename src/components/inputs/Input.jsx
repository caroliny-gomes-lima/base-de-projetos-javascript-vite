import React, { forwardRef } from "react";
import Styles from "./styles/input.styles"; //INITIALIZAÇÃO
import { FormHelperText } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useValueHandler } from "../FormConfig/FormInputHandlers";
import IconEndAdornmentComponent from "./inputComponents/IconEnd.adornment";
import { Texts } from "../../config";

const InputComponent = forwardRef((prop, ref) => {
  const {
    label,
    name,
    type,
    defaultValue,
    placeholder,
    required,
    validation,
    toolTip,
    onSubmit,
    icon,
    disabledUntil,
  } = prop;

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useFormContext();

  const watchAllFields = watch(name);
  const conditionFieldValue = disabledUntil ? watch(disabledUntil) : true;
  const isDisabled = disabledUntil ? !conditionFieldValue : false;

  const { defaultValue: inputDefaultValue } = useValueHandler(
    watchAllFields,
    defaultValue
  );

  return (
    <>
      <Controller
        name={name}
        control={control}
        rules={{
          required: required && Texts.ptBr.requiredField,
          validate: validation,
        }}
        defaultValue={inputDefaultValue || ""}
        disabled={isDisabled}
        render={({ field }) => (
          <>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {label && (
                <Styles.Label $withError={errors[name]}>
                  {label + (required ? "*" : "")}
                </Styles.Label>
              )}
              {toolTip || null}
            </div>
            <Styles.StyledInput
              {...field}
              name={name}
              inputRef={ref || null}
              type={type}
              value={field.value !== undefined ? field.value : ""}
              onBlur={field.onBlur}
              onChange={field.onChange}
              placeholder={placeholder}
              endAdornment={
                icon && icon.Component ? (
                  <IconEndAdornmentComponent
                    formHandler={handleSubmit(onSubmit)}
                    icon={icon}
                  />
                ) : null
              }
            />
            <ErrorMessage
              errors={errors}
              name={name}
              render={({ message }) => (
                <FormHelperText error>{message}</FormHelperText>
              )}
            />
          </>
        )}
      />
    </>
  );
});
InputComponent.displayName = "InputComponent";
export default React.memo(InputComponent);
