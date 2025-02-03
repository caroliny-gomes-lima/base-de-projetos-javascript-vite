import React from "react";
import Styles from "../styles/Styles";
import pagesConfig from "../../../config/pagesConfig";

function ItensMenuRenderer({ handleNavigation, location }) {
  return (
    <Styles.Content>
      {pagesConfig.logged.map((item) => {
        return item.pages.map((page, index) => {
          return (
            <div key={index}>
              <Styles.NavigationButton
                onClick={() => handleNavigation(page.path)}
                $changeColor={page.path === location.pathname}
              >
                <Styles.PageNavigationButton>
                  {page.icon}
                  <p>{page.title}</p>
                </Styles.PageNavigationButton>
              </Styles.NavigationButton>
            </div>
          );
        });
      })}
    </Styles.Content>
  );
}

export default React.memo(ItensMenuRenderer);
