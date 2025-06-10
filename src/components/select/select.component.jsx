//import React from "react";
import Styles from "./styles/select.styles"; //INITIALIZAÇÃO do componente
import { Checkbox, FormHelperText, ListSubheader } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { Texts } from "../../config";
import { useSelectValeuHandler } from "../FormConfig/FormInputHandlers";
import { ErrorMessage } from "@hookform/error-message";

function SelectComponent(props) {
  const {
    name,
    label = "",
    options,
    optionsGrouped,
    withTags,
    required,
  } = props;

  const {
    control,
    formState: { errors },
  } = useFormContext();
  const { handleChange, renderFieldLabel } = useSelectValeuHandler({
    options,
    optionsGrouped,
    withTags,
  });

  return (
    <>
      <Controller
        name={name}
        rules={{ required: required && Texts.ptBr.requiredField }}
        control={control}
        defaultValue={withTags ? [] : ""}
        disabled={false}
        render={({ field }) => (
          <>
            {label && (
              <Styles.ContainerLabel>
                <Styles.Label $withError={errors[name]}>
                  {label + (required ? "*" : "")}
                </Styles.Label>
              </Styles.ContainerLabel>
            )}
            <Styles.StyledSelect
              {...field}
              multiple={withTags}
              value={field.value || (withTags ? [] : "")}
              onChange={(event) => field.onChange(event.target.value)}
              displayEmpty
              onBlur={field.onBlur}
              inputProps={{ "aria-label": "Without label" }}
              renderValue={(selected) => renderFieldLabel(selected)}
            >
              <Styles.StyledMenuItem value="">
                Selecione uma opção
              </Styles.StyledMenuItem>
              {optionsGrouped
                ? optionsGrouped.map((group, groupIndex) => [
                    <ListSubheader
                      key={`header-${groupIndex}`}
                      sx={{ color: "black", fontWeight: "bold" }}
                    >
                      {group.group}
                    </ListSubheader>,
                    group.options.map((item, itemIndex) => (
                      <Styles.StyledMenuItem
                        key={`item-${groupIndex}-${itemIndex}`}
                        value={item.value}
                      >
                        {item.label}
                      </Styles.StyledMenuItem>
                    )),
                  ])
                : options?.map((item, index) =>
                    withTags ? (
                      <Styles.StyledMenuItem key={index} value={item.value}>
                        <Checkbox
                          checked={field.value?.includes(item.value)}
                          onChange={() => handleChange(item.value, field)}
                          sx={{
                            color: "black",
                            "&.Mui-checked": {
                              color: "#2986cc",
                              ":hover": {
                                color: "white",
                              },
                            },
                          }}
                        />
                        {item.label}
                      </Styles.StyledMenuItem>
                    ) : (
                      <Styles.StyledMenuItem key={index} value={item.value}>
                        {item.label}
                      </Styles.StyledMenuItem>
                    )
                  )}
            </Styles.StyledSelect>
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
}
export default SelectComponent;
