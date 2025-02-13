import React from "react";
import styled from "styled-components";
import { IoSearch } from "react-icons/io5";
import { colors, FontFamily } from "../../config";
import { Controller, useForm } from "react-hook-form";
import {
  Autocomplete,
  createTheme,
  IconButton,
  TextField,
  ThemeProvider,
} from "@mui/material";

const theme = createTheme({
  components: {
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          ...FontFamily.medium12,
          width: "100%",
        },
        option: {
          "&:hover": {
            backgroundColor: colors.blue,
            color: colors.white,
          },
          "&[aria-selected='true']": {
            backgroundColor: colors.blue + 90,
            color: colors.white,
          },
        },
      },
    },
  },
});

const StyledBox = styled.div(({ theme }) => {
  const { palette: colors, spacing } = theme;
  return {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "40px",
    backgroundColor: colors.primary.main,
    borderRadius: spacing(0.5),
    padding: spacing(0, 1),
  };
});

const StyledInput = styled(TextField)(() => {
  return {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: "none",
      },
      "&:hover fieldset": {
        border: "none",
      },
      "&.Mui-focused fieldset": {
        border: "none",
      },
    },
  };
});

const StyledIconButton = styled(IconButton)(() => {
  return {
    "&&.MuiIconButton-root": {
      width: "35px",
      height: "35px",
      alignSelf: "center",
    },
  };
});

function InputSearch({ options, onChange, onSubmit }) {
  const { control, handleSubmit } = useForm();
  return (
    <StyledBox>
      <Controller
        name="search"
        control={control}
        rules={{ required: false }}
        defaultValue=""
        render={({ field }) => (
          <>
            <ThemeProvider theme={theme}>
              <Autocomplete
                freeSolo
                size="small"
                options={options}
                onInputChange={(value) => field.onChange(value)}
                renderInput={(params) => (
                  <StyledInput
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
      <StyledIconButton type="submit" onClick={handleSubmit(onSubmit)}>
        <IoSearch />
      </StyledIconButton>
    </StyledBox>
  );
}
export default React.memo(InputSearch);
