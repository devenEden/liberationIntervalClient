import AddMixtapePage from "../pages/mixtapes/AddMixtapePage";
import MyMixtapePage from "../pages/mixtapes/MyMixtapePage";

const mixtapeRoutes = [
  {
    key: "/mixtapes/create",
    path: "/mixtapes/create",
    component: AddMixtapePage,
  },
  {
    key: "/mixtapes",
    path: "/mixtapes",
    component: MyMixtapePage,
  }
];

export default mixtapeRoutes;
