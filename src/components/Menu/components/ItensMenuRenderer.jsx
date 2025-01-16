import React from "react";
import Styles from "../styles/Styles";
import pagesConfig from "../../../config/pagesConfig";

function ItensMenuRenderer({ handleNavigation, location }) {
  return (
    <Styles.Content>
      {pagesConfig.logged.map((item) => {
        return item.pages.map((page, index) => {
          return (
            <Styles.NavPageContainer key={index}>
              <Styles.NavigationButton
                onClick={() => handleNavigation(page.path)}
                $changeColor={page.path === location.pathname}
              >
                {page.icon}
                <p>{page.name}</p>
              </Styles.NavigationButton>
            </Styles.NavPageContainer>
          );
        });
      })}
    </Styles.Content>
  );
}

export default React.memo(ItensMenuRenderer);
