import React from "react";
import styled from "styled-components";
import { FormHelperText, Input, InputAdornment } from "@mui/material";
import { FontFamily } from "../../config";
import { Controller, useFormContext } from "react-hook-form";
import IconEndAdornmentComponent from "./inputComponents/IconEnd.adornment";
import FileEndAdornmentComponent from "./inputComponents/FileEnd.adornment";

const StyledInput = styled(Input)(({ theme }) => {
  const { palette: colors, spacing } = theme;
  return {
    "&&.MuiInput-root": {
      ...FontFamily.medium12,
      width: "100%",
      height: "40px",
      color: colors.text.primary,
      backgroundColor: colors.primary.main,
      padding: theme.spacing(1.962, 1, 1.962, 1.962),
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

function InputComponent({
  label,
  name,
  type,
  defaultValue,
  error,
  required,
  validation,
  toolTip,
  onSubmit,
  icon,
  downloadButtonLabel,
  uploadButtonLabel,
  downloadHref,
  openOnNewTab,
  hideButtonLabel,
}) {
  const { control, handleSubmit } = useFormContext();
  console.log("InputComponent renderizou!");
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
              type={type === "file" ? "text" : type}
              value={type === "file" ? undefined : field.value}
              accept={type === "file" ? "application/pdf" : null}
              onChange={(e) => {
                if (type === "file") {
                  field.onChange(e.target.files); // Atualiza corretamente o estado
                } else {
                  field.onChange(e.target.value);
                }
              }}
              endAdornment={
                type === "file" ? (
                  <FileEndAdornmentComponent
                    downloadButtonLabel={downloadButtonLabel}
                    uploadButtonLabel={uploadButtonLabel}
                    downloadHref={downloadHref}
                    openOnNewTab={openOnNewTab}
                    hideButtonLabel={hideButtonLabel}
                    onFileChange={(e) => field.onChange(e.target.files)}
                  />
                ) : icon && icon.Component ? (
                  <IconEndAdornmentComponent
                    formHandler={handleSubmit(onSubmit)}
                    icon={icon}
                  />
                ) : (
                  <InputAdornment position="end">{icon}</InputAdornment>
                )
              }
            />
            {error && <FormHelperText error>{error.message}</FormHelperText>}
          </>
        )}
      />
    </>
  );
}
export default React.memo(InputComponent);
