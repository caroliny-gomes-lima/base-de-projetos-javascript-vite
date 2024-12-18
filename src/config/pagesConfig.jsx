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
          path: paths.login,
          name: "loginPage",
        },
        {
          navigationId: 1,
          path: paths.home,
          name: "homePage",
        },
      ],
    },
  ],
};

export default pagesConfig;
