import React from "react";
import { IconButton } from "@mui/material";
import styled from "styled-components";
import { colors, FontFamily } from "../../config";
import { Download, Upload } from "@mui/icons-material";
import TextComponent from "../others/TextComponent";

const InputContainer = styled.div(({ theme }) => {
  const { palette: colors, spacing } = theme;
  return {
    width: "100%",
    height: "40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    textOverflow: "ellipsis",
    padding: spacing(1.962, 1, 1.962, 1.962),
    backgroundColor: colors.primary.main,
    borderRadius: spacing(0.5),
  };
});
const ContainerLabel = styled.div(() => {
  return {
    display: "flex",
    alignContent: "center",
    justifyContent: "flex-start",
  };
});

const Label = styled.label(({ theme }) => {
  const { spacing } = theme;
  return {
    ...FontFamily.bold12,
    padding: 0,
    marginTop: spacing(1),
    marginBottom: spacing(1),
    transition: ".2s",
  };
});

function InputFile({
  id = "input-file",
  uploadButton = false,
  downloadButton = false,
  selectedFile = {},
  fileUrl = "",
  setSelectedFile = () => {},
  setFileUrl = () => {},
}) {
  const fileInputRef = React.useRef(null);
  const MAX_FILE_SIZE = 5 * 1024 * 1024;
  const [fileError, setFileError] = React.useState("");

  const handleImageChange = (event) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () =>
        setSelectedFile({
          url: reader.result,
          type: file.type,
          name: file.name,
          size: file.size,
        });
      reader.readAsDataURL(file);

      const url = URL.createObjectURL(file);
      setFileUrl(url);
    }

    if (file.size > MAX_FILE_SIZE) {
      setFileError(
        "O arquivo selecionado é muito grande. O tamanho máximo permitido é 5MB."
      );
      return;
    }
  };

  React.useEffect(() => {
    return () => {
      if (fileUrl) {
        URL.revokeObjectURL(fileUrl);
      }
    };
  }, [fileUrl]);
  console.log(selectedFile.size);
  return (
    <>
      <ContainerLabel>
        <Label>{"Arquivo"}</Label>
      </ContainerLabel>
      <InputContainer>
        <TextComponent>{selectedFile?.name}</TextComponent>
        <input
          id={id}
          name="file"
          type="file"
          accept="image/*, application/pdf"
          ref={fileInputRef}
          onChange={handleImageChange}
          style={{ display: "none" }}
        />
        {uploadButton && (
          <IconButton
            size="small"
            onClick={() => fileInputRef.current.click()}
            style={{ backgroundColor: colors.blue }}
          >
            <Upload style={{ color: colors.white }} />
          </IconButton>
        )}
        {downloadButton ? (
          <a href={fileUrl} download={selectedFile.name}>
            <IconButton size="small" style={{ backgroundColor: colors.blue }}>
              <Download style={{ color: colors.white }} />
            </IconButton>
          </a>
        ) : null}
      </InputContainer>
      <TextComponent>{fileError}</TextComponent>
      {uploadButton &&
      selectedFile.type?.startsWith("image/") &&
      selectedFile.size < MAX_FILE_SIZE ? (
        <div style={{ width: "100%", height: "100%", backgroundColor: "red" }}>
          <img
            src={selectedFile.url}
            alt=""
            style={{ width: "250px", height: "auto" }}
          />
        </div>
      ) : null}
    </>
  );
}

export default InputFile;
