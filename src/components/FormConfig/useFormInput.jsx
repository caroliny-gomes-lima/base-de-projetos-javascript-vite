import React from "react";
import { useFormContext } from "react-hook-form";

function useInputValue(value, defaultValue) {
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

// function UseSelectOptionsValue(initialOptions) {
//   console.log("!!!!!!!!!!!!", initialOptions);
//   //console.log("###############", setInitialOptions);
//   const [selectOptions, setSelectOptions] = React.useState(initialOptions);
//   React.useEffect(() => {
//     setSelectOptions(initialOptions);
//   }, [initialOptions]);
//   console.log("!!!!!!!!!!!!", selectOptions);
//   console.log("!!!!!!!!!!!!", initialOptions);
//   return [selectOptions];
// }

function useFileValue(props) {
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

export { useInputValue, useFileValue };

/*
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
