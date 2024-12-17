import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import { connectRouter } from "connected-react-router";

import reducers from "../features/reducers";
import sagas from "./sagas";

// Criação do histórico
export const history = createBrowserHistory();

// Criação do middleware
const sagaMiddleware = createSagaMiddleware();

// Configuração da store com Redux Toolkit
const store = configureStore({
  reducer: {
    ...reducers,
    router: connectRouter(history), // Integra o history com o Redux
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware, routerMiddleware(history)), // Adiciona o middleware
  devTools: process.env.NODE_ENV !== "production", // Habilita o Redux DevTools apenas no modo de desenvolvimento
});

// Executa as sagas
sagaMiddleware.run(sagas);

export default store;

/* 
 * USO DO MIDDLEWARE
   É uma cadeia de responsabilidades (fluxo) que age como uma série de "filtros" ou "intermediários" 
   que processam a ação antes de ela atingir o reducer.
   No Redux funciona como um fluxo de processamento que acontece entre o momento em que uma ação é 
   despachada (dispatch(action)) e o momento em que ela chega ao reducer para atualizar o estado.
   é como imaginar uma série de "estações" em uma linha de montagem. Cada estação (middleware) 
   pode:
   Observar a ação que está passando.
   Modificar ou bloquear a ação.
   Executar tarefas adicionais, como chamadas a APIs.
   Encaminhar a ação para a próxima estação.
*/

//------------------------------------------------------------------------------------------------

/* LIBS para o Redux
 * O redux-saga é uma biblioteca que facilita o gerenciamento de operações assíncronas no Redux, 
   como chamadas de APIs ou outras tarefas que precisam de lógica complexa.
   O redux-saga inclui um middleware específico, criado com createSagaMiddleware(), que intercepta 
   ações disparadas no Redux para permitir a execução de "sagas".
   Sagas são funções geradoras (function*) que definem o fluxo de tarefas assíncronas.

  * O connected-react-router é uma biblioteca que conecta o estado de navegação (rotas) ao Redux, 
    permitindo que as mudanças de rota sejam rastreadas no estado da aplicação. Ele ajuda a 
    sincronizar o histórico de navegação com o store do Redux.
    Ele fornece um middleware chamado routerMiddleware, que intercepta ações de navegação (como PUSH, REPLACE) 
    e sincroniza o histórico de navegação com o Redux.

 */
