import { IoSearch } from "react-icons/io5";
import WithFormHolder from "../../FormConfig/FormHolder";
import InputComponent from "../../inputs/Input";
import { Grid2 } from "@mui/material";

function InputSearchRender() {
  return (
    <>
      <Grid2 item xs={12} sm={6} md={12} lg={12}>
        <InputComponent
          name="search"
          type="search"
          icon={{
            Component: IoSearch, // Passa a referência do componente, não JSX
            submit: true, // Se true, o botão do ícone submete o formulário
            buttonProps: { size: "small" }, // Props opcionais
          }}
          onSubmit={(data) => console.log(data)}
        />
      </Grid2>
    </>
  );
}
//HINT 1
const InputSearch = WithFormHolder(InputSearchRender, { mode: "onBlur" });

export default InputSearch;

/* 1 - Com mode: "onBlur", a validação de um campo ocorre quando o usuário 
sai do campo (perde o foco), ou seja, no evento onBlur.*/
