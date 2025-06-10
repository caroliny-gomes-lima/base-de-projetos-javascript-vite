/* funções que lidam com manipulação de valores (dados) em formulários (inputs) */
import { Chip } from "@mui/material";

import React from "react";
import { useFormContext } from "react-hook-form";

function useValueHandler(value, defaultValue) {
  const [inputValue, setInputValue] = React.useState({
    value: value ?? "",
    defaultValue: defaultValue ?? "",
  });
  React.useEffect(() => {
    if (value !== undefined) {
      setInputValue({
        value: typeof value === "number" ? value.toString() : value,
        defaultValue: "",
      });
    }

    if (defaultValue !== undefined) {
      setInputValue((prev) => ({ ...prev, defaultValue }));
    }
  }, [value, defaultValue]);

  return inputValue;
}

function useSelectValeuHandler(props) {
  const { options, optionsGrouped, withTags } = props;

  //HINT 1
  const handleChange = (itemValue, field) => {
    const { value, onChange } = field;
    const currentIndex = value?.indexOf(itemValue); //HINT 2
    //HINT 3
    const newValue = [...(value || [])];

    //HINT 4
    if (currentIndex === -1) {
      newValue.push(itemValue);
    } else {
      newValue.splice(currentIndex, 1);
    }

    return onChange(newValue);
  };

  //HINT 5
  const renderFieldLabel = (selected) => {
    //HINT 6
    switch (true) {
      //HINT 7
      case withTags && Array.isArray(selected) && selected.length > 0:
        return options
          .filter((opt) => selected.includes(opt.value))
          .map((opt) => (
            <Chip
              key={opt.value}
              label={opt.label}
              size="medium"
              sx={{ margin: "2px", color: "#fff", backgroundColor: "#2986cc" }}
            />
          ));

      //HINT 8
      case optionsGrouped && String(selected) !== "":
        return (
          optionsGrouped
            ?.flatMap((group) => group.options)
            .find((opt) => opt.value === selected)?.label ||
          "Selecione uma opção"
        );
      //HINT 9
      default:
        return (
          options?.find((opt) => opt.value === selected)?.label ||
          "Selecione uma opção"
        );
    }
  };

  return {
    handleChange,
    renderFieldLabel,
  };
}

function useFileHandler(props) {
  //HINT 1
  const { fileUrl, setFileUrl, texts, MAX_FILE_SIZE, setSelectedFile } = props;

  const { setValue } = useFormContext();

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      //HINT 2
      if (file.size > MAX_FILE_SIZE) {
        setFileUrl({
          ...fileUrl,
          fileError: texts.errorMessages,
        });
        return null;
      }

      //HINT 3
      const reader = new FileReader();
      //HINT 4
      reader.onload = () => {
        setSelectedFile({
          url: reader.result,
          type: file.type,
          fileName: file.name,
          size: file.size,
        });

        setValue("fileBase64", reader.result.split(",")[1]);
      };
      reader.readAsDataURL(file);

      const url = URL.createObjectURL(file); //HINT 5
      setFileUrl({ file: url, fileError: "" });
    }
  };

  //HINT 6
  React.useEffect(() => {
    return () => {
      if (fileUrl) {
        URL.revokeObjectURL(fileUrl.file);
      }
    };
  }, [fileUrl]);

  return { handleFileChange };
}

export { useValueHandler, useSelectValeuHandler, useFileHandler };

//-----------------------------------------------------------------------------------
/*
EXPLICAÇÃO DOS HINTS INPUT FILE HANDLER:

HINT 1 - Recebe as props do inputFile

HINT 2 - valida o tamanho do arquivo. Se o tamanho do arquivo for maior que 5MB, 
mostra a mensagem de erro e retorna null.

HINT 3 - Lê um arquivo selecionado pelo usuário através do FileReader(uma função nativa do JavaScript).

HINT 4 - Quando a leitura do arquivo selecionado terminar o onload será executado para armazenar as informações do arquivo.
O reader.result contém os dados do arquivo em formato base64.
Os outros detalhes do arquivo, como o type, name e size junto com a url do arquivo serão armazenados no 
state selectedFile.
Depois inicia a leitura do arquivo como uma URL (reader.readAsDataURL(file))
exemplo: Se o usuário selecionar uma imagem foto.png, o resultado pode ser algo assim:
    {
      "url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUg...",
      "type": "image/png",
      "name": "foto.png",
      "size": 120034
    }

HINT 5 - Se o arquivo foi valido, gera uma URL temporaria com URL.createObjectURL(file) e armazena na 
    state fileUrl( setFileUrl(url)). Essa URL(CAMINHO) será usada para exibir a imagem na tela ou para fazer 
    download do arquivo.

HINT 6 - Efeito de limpeza de URL do arquivo ao desmontar o componente. Isso evita vazamento de memória
    ao excluir a URL do arquivo gerada.

*/
//-----------------------------------------------------------------------------------
/*
EXPLICAÇÃO DOS HINTS INPUT SELECT HANDLER:

HINT 1 -> função que lida com o tratamento do array de opções selecionadas via checkbox.
HINT 2 -> const currentIndex = value?.indexOf(itemValue) Verifica se o itemValue existe no array value
e retorna o index do itemValue.(https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)

HINT 3 -> const newValue = [...(value || [])] Cria uma cópia do array value com spread ou um array vazio se value for undefined.

HINT 4 -> Condição, se currentIndex === -1, adiciona o itemValue ao array newValue, caso contrário, substitui o itemValue.

HINT 5 -> função que verrifica o tipo de seleção (se é com checkbox ou agrupada ou simples) e renderiza o label no campo de seleção.
HINT 6 -> switch (true) -> Verifica se o campo de seleção é com checkbox, agrupado ou simples.

HINT 7 -> Se for com checkbox e selected for uma array, retorna os labels dos itens selecionados separados por vírgula.
options.filter((opt) => selected.includes(opt.value)) -> Filtra os itens selecionados no array options. 
O includes verifica se o valor do item está no array selected, ou seja, filtra os itens através da verificação do includes.
(https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
(https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)

O .map((opt) => opt.label) -> Retorna um array com labels dos itens selecionados após o filtro.
O .join(", ") -> Converte o array de labels em uma string separada por vírgula.
(https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

HINT 8 -> Se for agrupado, verifica se o selected não é uma string vazia, se não for, retorna o label do item selecionado.
O optionsGrouped?.flatMap((group) => group.options) -> É como map, mas a diferença é que o flatMap achata o array resultante em um único nível.
Achatar significa que, se o array resultante tiver arrays dentro dele, o flatMap irá "achatar" esses arrays em um único nível.
O flatmap é útil quando você precisa transformar um array de arrays em um único array.
O find((opt) => opt.value === selected)?.label -> Encontra o item selecionado no array agrupado e retorna o label.
(https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap)
(https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/find)

HINT 9 -> Se for simples, o options?.find((opt) => opt.value === selected)?.label || "Selecione uma opção"
retorna o label do item selecionado ou "Selecione uma opção" se não houver seleção. 
*/
