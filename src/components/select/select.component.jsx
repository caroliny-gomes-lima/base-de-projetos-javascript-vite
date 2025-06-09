import React from "react";
import Styles from "./styles/select.styles"; //INITIALIZAÇÃO do componente
import { Checkbox, ListSubheader, MenuItem, Select } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { Texts } from "../../config";
//import { UseSelectOptionsValue } from "../FormConfig/useFormInput";

function SelectComponent(props) {
  // console.log("renderizou");
  const { name, label = "", options, optionsGrouped, withTags } = props;
  const { control } = useFormContext();

  //console.log("onChange", allOptions);

  //const [personName, setPersonName] = React.useState([]);

  const handleChange = (itemValue, field) => {
    const { value, onChange } = field;
    const currentIndex = value?.indexOf(itemValue);
    console.log("currentIndex", currentIndex);
    console.log("value", value);

    const newValue = [...(value || [])];
    if (currentIndex === -1) {
      newValue.push(itemValue);
    } else {
      newValue.splice(currentIndex, 1);
    }
    onChange(newValue);
    //setPersonName(newValue);
  };

  return (
    <>
      <Controller
        name={name}
        rules={{ required: false }}
        control={control}
        defaultValue={""}
        disabled={false}
        render={({ field }) => (
          <>
            {label && (
              <Styles.ContainerLabel>
                <Styles.Label>{label}</Styles.Label>
              </Styles.ContainerLabel>
            )}
            <Styles.StyledSelect
              {...field}
              multiple={withTags}
              value={field.value || (withTags ? [] : "")}
              onChange={(event) => field.onChange(event.target.value)}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              renderValue={(selected) =>
                withTags && Array.isArray(selected) && selected.length > 0
                  ? options
                      .filter((opt) => selected.includes(opt.value))
                      .map((opt) => opt.label)
                      .join(", ")
                  : options?.find((opt) => opt.value === selected)?.label
              }
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
                      <>
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
                      </>
                    ) : (
                      <Styles.StyledMenuItem key={index} value={item.value}>
                        {item.label}
                      </Styles.StyledMenuItem>
                    )
                  )}
            </Styles.StyledSelect>
          </>
        )}
      />
    </>
  );
}
export default SelectComponent;
