import React from "react";
import pagesConfig from "../config/pagesConfig";
import pages from "../pages";
import Styles from "./styles/Styles";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Header, MenuNavigation } from "../components";

function ApplicationRoutes() {
  const [MenuHeigh, setMenuHeigh] = React.useState(null);
  const [isOpenMenu, setMenuOpen] = React.useState(false);

  //HINT: 1
  const calculateMenuHeigh = React.useCallback(() => {
    //HINT: 2
    const headerMenu = document.getElementById("header-menu");
    if (headerMenu) {
      setMenuHeigh(headerMenu.offsetHeight);
    }
  }, []); //HINT: 3

  React.useEffect(() => {
    calculateMenuHeigh(); //HINT: 4
    window.addEventListener("resize", calculateMenuHeigh); //HINT: 5

    return () => {
      window.removeEventListener("resize", calculateMenuHeigh); //HINT: 6
    };
  }, [calculateMenuHeigh]); //HINT: 7

  return (
    <div style={{ height: "100%", width: "100vw" }}>
      <Styles.Container>
        <Router>
          <Header id="header-menu" onClick={() => setMenuOpen(true)} />
          <Styles.Content>
            <MenuNavigation isOpenMenu={isOpenMenu} setMenuOpen={setMenuOpen} />
            <Styles.PageContainer $menuHeight={MenuHeigh}>
              <Styles.PageContent>
                <Routes>
                  {pagesConfig.logged.map((item) => {
                    if (item.pages) {
                      return item.pages.map((page, index) => {
                        //HINT: 8
                        const Component = pages[page.name];
                        return (
                          <Route
                            key={page.path + index}
                            path={page.path}
                            element={<Component />}
                          />
                        );
                      });
                    }
                  })}
                </Routes>
              </Styles.PageContent>
            </Styles.PageContainer>
          </Styles.Content>
        </Router>
      </Styles.Container>
    </div>
  );
}
export default React.memo(ApplicationRoutes);

/*
  1 - função useCallback para memorizar a função calculateMenuHeight
  evitando que a função seja recriada em cada renderização 
  O cálculo inicial da altura do menu será feito nessa função useCallback.
*/

//2 - calculo da altura do menu a partir do header-menu para ser memorizado

//3 - array de dependências vazio, o calculo será feito apenas uma vez

//4 - chamando a função calculateMenuHeigh após cada mudança de tamanho da tela

//5 - A altura do menu será recalculada sempre que a tela for redimensionada

//6 - O listener de resize será removido quando o componente for desmontado(fechar o navegador)

//7 - O useEffect será executado sempre que a função calculateMenuHeigh mudar

//8 - pages é um array, mas aqui já está convertido como um objeto
