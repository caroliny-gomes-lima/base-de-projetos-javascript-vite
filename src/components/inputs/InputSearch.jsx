import React from "react";
import { IoSearch } from "react-icons/io5";
import { Controller, useForm } from "react-hook-form";
import Styles from "./styles/inputSearch.styles"; //INITIALIZAÇÃO
import { Autocomplete, ThemeProvider } from "@mui/material";

function InputSearch({ options, onChange, onSubmit }) {
  const { control, handleSubmit } = useForm();
  return (
    <Styles.StyledBox>
      <Controller
        name="search"
        control={control}
        rules={{ required: false }}
        defaultValue=""
        render={({ field }) => (
          <>
            <ThemeProvider theme={Styles.theme}>
              <Autocomplete
                freeSolo
                size="small"
                options={options}
                onInputChange={(value) => field.onChange(value)}
                renderInput={(params) => (
                  <Styles.StyledInput
                    {...params}
                    variant="outlined"
                    onChange={onChange}
                    fullWidth
                  />
                )}
              />
            </ThemeProvider>
          </>
        )}
      />
      <Styles.StyledIconButton type="submit" onClick={handleSubmit(onSubmit)}>
        <IoSearch />
      </Styles.StyledIconButton>
    </Styles.StyledBox>
  );
}
export default React.memo(InputSearch);
