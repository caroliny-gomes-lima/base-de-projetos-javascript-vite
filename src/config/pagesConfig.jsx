import { Home } from "@mui/icons-material";
import { paths } from "../routes/Navigation";

const pagesConfig = {
  notLogged: [
    {
      path: "",
      name: "",
    },
    {
      path: "",
      name: "",
    },
  ],

  logged: [
    {
      pages: [
        {
          navigationId: 0,
          title: "Home",
          path: paths.home,
          name: "homePage",
          icon: <Home />,
        },
        {
          navigationId: 1,
          title: "Configurações",
          path: paths.settings,
          name: "settingsPage",
          icon: <Home />,
        },
      ],
    },
  ],
};

export default pagesConfig;
