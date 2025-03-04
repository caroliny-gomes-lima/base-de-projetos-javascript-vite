import React from "react";
import Styles from "../styles/Styles";
import ItensMenuRenderer from "./ItensMenuRenderer";
import { useLocation, useNavigate } from "react-router-dom";

function WebMenuRenderer() {
  const navigate = useNavigate();
  const location = useLocation();

  //HINT 1
  const handleNavigation = React.useCallback(
    (path) => {
      //HINT 2
      if (location.pathname !== path) {
        navigate(path);
      }
    },
    [location.pathname, navigate] //HINT 3
  );

  return (
    <Styles.Container>
      <ItensMenuRenderer
        handleNavigation={handleNavigation}
        location={location}
      />
      <Styles.MenuFooter>
        <Styles.StyledText>Company Web Admin</Styles.StyledText>
        <Styles.StyledText>Version 0.0.1</Styles.StyledText>
      </Styles.MenuFooter>
    </Styles.Container>
  );
}

export default WebMenuRenderer;

/*1 - Memoriza a função de navegação para evitar 
recriação desnecessária da lista de botões de navegação(e da função de navegação)
que tem a função  useCallback como atributo*/

/*2 - Lógica que verifica se a dependência mudou, ou seja, se a rota mudou */

/*3 - Função useCallback, só será recriada se as dependências mudarem */
