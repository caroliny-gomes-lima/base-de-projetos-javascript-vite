import React from "react";
import Styles from "../styles/Styles";
import Avatar from "@mui/material/Avatar";
import TextComponent from "../../others/TextComponent";
import { Fonts } from "../../../config";
import WithGlobalLoader from "../../others/TextLoader";

//Instanciando o HOC com o componente Text
const Text = WithGlobalLoader(TextComponent);

function UserInfos() {
  return (
    <>
      <Avatar src="/broken-image.jpg" style={{ alignSelf: "center" }} />
      <Styles.Infos>
        <Text
          loading={false}
          fontFamily={Fonts.bold}
          fontSize={14}
          loadingSizes={["200px", "25px"]}
        >
          Jane Doe
        </Text>
        <Text
          loading={false}
          fontFamily={Fonts.semibold}
          fontSize={12}
          loadingSizes={["200px", "25px"]}
        >
          jane.doe@email.com
        </Text>
      </Styles.Infos>
    </>
  );
}

export default React.memo(UserInfos);
