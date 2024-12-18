import React from "react";
// import { Provider } from "react-redux";
// import { ConnectedRouter } from "connected-react-router";

import { Box, CssBaseline } from "@mui/material";
//import { ThemeProvider as StyledThemeProvider } from "styled-components";
import ApplicationRoutes from "./Routes";

// function ThemeProviderComponent({ theme, children }) {
//   return (
//     <ThemeProvider theme={theme}>
//       <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
//     </ThemeProvider>
//   );
// }

function CoreNavigation() {
  return (
    <Box bgcolor={"aqua"} height={"100%"} overflow={"hidden"}>
      <CssBaseline />
      <ApplicationRoutes />
    </Box>
  );
}

export default React.memo(CoreNavigation);

/* 
* AWARE COMPONENT
  Exemplo de aware componente que interage diretamente com o estado ou 
  contexo gloal da aplicação. Esse componente serve como componente principal da aplicação, 
  responsável por orquestrar as rotas, modais e a configuração geral do estado global da aplicação.

  Um componente seria considerado aware (não ciente, stateless ou desacoplado do estado global) 
  se ele apenas recebesse propriedades e não interagisse diretamente com nenhum contexto ou estado 
  global.
 */

//------------------------------------------------------------------------------------------------

/* LIBS
 * O connected-react-router é uma biblioteca que integra o gerenciamento de rotas do React Router 
   com o estado global do Redux. Isso permite que você sincronize o histórico de navegação da 
   aplicação com o estado do Redux, exemplo:
   
   import { push } from "connected-react-router";

   Navega para "/dashboard" programaticamente
   dispatch(push("/dashboard"));

   * 
 */
