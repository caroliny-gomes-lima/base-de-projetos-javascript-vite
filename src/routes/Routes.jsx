import React from "react";
import pagesConfig from "../config/pagesConfig";
import pages from "../pages";
import Styles from "./styles/Styles";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function ApplicationRoutes() {
  return (
    <Styles.InitialBackground>
      <Router>
        <Routes>
          {pagesConfig.logged.map((item) => {
            if (item.pages) {
              return item.pages.map((page, index) => {
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
      </Router>
    </Styles.InitialBackground>
  );
}
// const teste = React.memo(ApplicationRoutes);
// console.log(teste);
export default React.memo(ApplicationRoutes);
