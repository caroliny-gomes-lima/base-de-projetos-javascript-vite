import React from "react";
import styled from "styled-components";
import { FormHelperText, Input } from "@mui/material";
import { FontFamily } from "../../config";
import { Controller, useFormContext } from "react-hook-form";
import IconEndAdornmentComponent from "./inputComponents/IconEnd.adornment";
import { forwardRef } from "react";

const StyledInput = styled(Input)(({ theme }) => {
  const { palette: colors, spacing } = theme;
  return {
    "&&.MuiInput-root": {
      ...FontFamily.medium12,
      width: "100%",
      height: "40px",
      color: colors.text.primary,
      backgroundColor: colors.primary.main,
      padding: spacing(1.962, 1, 1.962, 1.962),
      borderRadius: spacing(0.5),
      "&:before, &:after": {
        borderBottom: "none !important",
      },
      "&:hover:not(.Mui-disabled):before": {
        borderBottom: "none",
      },
      "& .MuiInputBase-input": {
        padding: 0,
      },
      "& .MuiInputBase-input::placeholder": {
        color: colors.text.primary,
        opacity: 0.5,
      },
    },
  };
});

const Label = styled.label(({ withError, theme }) => {
  const { palette: colors, spacing } = theme;
  return {
    ...FontFamily.bold12,
    padding: 0,
    marginTop: spacing(1),
    marginBottom: spacing(1),
    color: withError ? colors.error.main : colors.primary.contrastText,
    transition: ".2s",
  };
});

const InputComponent = forwardRef(
  (
    {
      label,
      name,
      type,
      defaultValue,
      placeholder,
      error,
      required,
      validation,
      toolTip,
      onSubmit,
      icon,
    },
    ref
  ) => {
    const { control, handleSubmit } = useFormContext();

    return (
      <>
        <Controller
          name={name}
          control={control}
          rules={{ required: Boolean(required), validate: validation }}
          defaultValue={defaultValue || ""}
          render={({ field }) => (
            <>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {label && <Label>{label}</Label>}
                {toolTip || null}
              </div>
              <StyledInput
                {...field}
                inputRef={ref || null}
                type={type === "file" ? "file" : type}
                value={field.value !== undefined ? field.value : ""}
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
              {error && <FormHelperText error>{error.message}</FormHelperText>}
            </>
          )}
        />
      </>
    );
  }
);
InputComponent.displayName = "InputComponent";
export default React.memo(InputComponent);
