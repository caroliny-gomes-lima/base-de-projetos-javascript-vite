import React from "react";
import WithFormHolder from "../../FormConfig/FormHolder";
import Grid from "@mui/material/Grid2";
import InputSearch from "../../inputs/InputSearch";

function InputSearchRender() {
  const top100Films = [
    { label: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
    { label: "The Godfather: Part II", year: 1974 },
    { label: "The Dark Knight", year: 2008 },
    { label: "12 Angry Men", year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: "Pulp Fiction", year: 1994 },
  ];

  //HINT 1
  const [filteredOptions, setFilteredOptions] = React.useState(top100Films);

  //HINT 2
  function onSearchChange(event) {
    const input = event.target?.value.toLowerCase(); // HINT 3
    // HINT 7
    setFilteredOptions(
      // HINT 4
      top100Films.filter(
        (option) =>
          option.label.toLowerCase().includes(input) || // HINT 5
          option.year.toString().includes(input) // HINT 6
      )
    );
  }

  const onSubmit = React.useCallback((data) => {
    console.log(data);
    onSearchChange(data);
  }, []);

  return (
    <>
      <Grid container spacing={0} justifyContent={"center"}>
        <Grid size={{ xs: 2, sm: 4, md: 10, lg: 10 }}>
          <InputSearch
            options={filteredOptions}
            onChange={onSearchChange}
            onSubmit={(data) => onSubmit(data)}
          />
        </Grid>
      </Grid>
    </>
  );
}

const InputSearchTeste = WithFormHolder(InputSearchRender);

export default InputSearchTeste;

/* 1 - useState para armazenar e atualizar a lista de opções.
O filteredOptions contém a lista de opções filtradas, que serão exibidas na busca.
O setFilteredOptions é a função que atualiza o filteredOptions.*/

/* 2 - Função onSearchChange para filtrar as opções.
Essa função é chamada quando o usuário digita no campo de busca.

 3 - event.target?.value.toLowerCase() Captura o valor digitado no campo de entrada (input) e
 converte tudo para minúsculas para evitar problemas de case-sensitive
 
 4 - top100Films.filter(...) Filtra a lista original (top100Films) e mantém apenas os filmes que 
 contêm o texto digitado.
 
 5 - option.label.toLowerCase().includes(input) verifica se o nome do filme inclui o termo digitado.

 6 - option.year.toString().includes(input) verifica se o ano do filme contém o número digitado..
 
 7 - setFilteredOptions(...) Atualiza filteredOptions para exibir somente os filmes que correspondem 
 à pesquisa.
 */
