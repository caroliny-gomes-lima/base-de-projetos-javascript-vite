import React from "react";
import Styles from "../styles/Styles";
import Avatar from "@mui/material/Avatar";

function UserInfos() {
  //console.log("UserInfos renderizou!");
  return (
    <>
      <Avatar src="/broken-image.jpg" style={{ alignSelf: "center" }} />
      <Styles.Infos>
        <Styles.TextName>Jane Doe</Styles.TextName>
        <Styles.TextName>jane.doe@email.com</Styles.TextName>
      </Styles.Infos>
    </>
  );
}

export default React.memo(UserInfos);
