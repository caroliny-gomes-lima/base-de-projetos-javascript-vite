//fazer teste unitário depois
import React from "react";
import Styles from "./styles/inputFile.styles"; //INITIALIZAÇÃO
import { Input } from "@mui/material";
import { colors, Texts } from "../../config";
import { Download, Upload } from "@mui/icons-material";
import TextComponent from "../others/TextComponent";
import LoadContainer from "../others/ContainerLoader";
import IconEndAdornmentComponent from "./inputComponents/IconEnd.adornment";
import { useFileValue } from "../FormConfig/useFormInput";

//HOC -> Higher Order Component
const ImageLoader = LoadContainer(Styles.ImageBox);

//-------------------INICIALIZAÇÃO--------------------------------------
function InputFile(props) {
  const {
    //HINT 1
    label = "",
    uploadButton = false,
    downloadButton = false,
  } = props;

  const [fileUrl, setFileUrl] = React.useState({ file: "", fileError: "" }); //HINT 2
  const [selectedFile, setSelectedFile] = React.useState({
    url: null,
    type: null,
    fileName: "Sem arquivo selecionado",
  });

  const texts = Texts["ptBr"].file;
  const MAX_FILE_SIZE = 5 * 1024 * 1024;
  const FILE_TYPE_START_WITH = selectedFile.type?.startsWith("image/");
  const fileInputRef = React.useRef(null);

  //--------------------ATUALIZAÇÃO E DESMONTAGEM----------------
  //HINT 3
  const { handleFileChange } = useFileValue({
    fileUrl,
    setFileUrl,
    texts,
    MAX_FILE_SIZE,
    setSelectedFile,
  });

  //-------------------MONTAGEM-----------------------------

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      {label && (
        <Styles.ContainerLabel>
          <Styles.Label>{label}</Styles.Label>
        </Styles.ContainerLabel>
      )}
      <Styles.InputContainer>
        <TextComponent>{selectedFile?.fileName}</TextComponent>
        <Input
          id="input-file"
          name="file"
          type="file"
          accept="image/*, application/pdf"
          inputRef={fileInputRef}
          onChange={handleFileChange}
          style={{ display: "none" }}
        />
        {uploadButton && (
          <IconEndAdornmentComponent
            icon={{
              Component: Upload,
              color: colors.white,
              backgroundColor: colors.blue,
              size: 20,
              submit: true,
            }}
            formHandler={() => fileInputRef.current.click()}
          />
        )}
        {downloadButton ? (
          /*HINT 4*/
          <a href={fileUrl.file} download={selectedFile.fileName}>
            <IconEndAdornmentComponent
              icon={{
                Component: Download,
                color: colors.white,
                backgroundColor: colors.blue,
                size: 20,
                submit: false,
              }}
            />
          </a>
        ) : null}
      </Styles.InputContainer>
      <TextComponent color="red">{fileUrl.fileError}</TextComponent>
      {uploadButton &&
      FILE_TYPE_START_WITH &&
      selectedFile.size < MAX_FILE_SIZE ? (
        <ImageLoader size={50}>
          <img width="100%" src={selectedFile.url} alt="" />
        </ImageLoader>
      ) : null}
    </div>
  );
}

export default InputFile;

/*
HINT 1 - props de input para serem recebiddas

HINT 2 - useState (fileError) para definir o estado da mensagem de erro.

HINT 3 - função que lida com os valores do input de arquivo e a mudança dos arquivos no inputFile.

HINT 4 - botão para download do arquivo.
*/
