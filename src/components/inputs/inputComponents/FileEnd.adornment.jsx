import React from "react";
import { GetApp, Publish } from "@mui/icons-material";
import { Button } from "@mui/material";

function FileEndAdornmentComponent({
  downloadButtonLabel,
  uploadButtonLabel,
  downloadHref,
  openOnNewTab,
  hideButtonLabel,
  onFileChange,
}) {
  const fileInputRef = React.useRef(null);
  const [fileName, setFileName] = React.useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      onFileChange(event); // Passa o arquivo para o hook-form
    }
  };

  return (
    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
      {downloadButtonLabel ? (
        <Button
          variant="contained"
          color="primary"
          target={openOnNewTab ? "_blank" : null}
          onClick={(e) => {
            e.stopPropagation();
            window.open(downloadHref);
          }}
          style={{ marginBottom: "10px", whiteSpace: "nowrap" }}
        >
          <GetApp style={{ marginRight: hideButtonLabel ? 0 : "2px" }} />
          {hideButtonLabel ? "" : downloadButtonLabel}
        </Button>
      ) : uploadButtonLabel ? (
        <>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={() => fileInputRef.current.click()}
          >
            <Publish style={{ marginRight: "5px" }} />
            {hideButtonLabel ? "" : uploadButtonLabel}
          </Button>
          {fileName && <span>{fileName}</span>}
        </>
      ) : null}
    </div>
  );
}

export default FileEndAdornmentComponent;
