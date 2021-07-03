import AuthPage from "../pages/auth/AuthPage";
import ResetPasswordPage from "../pages/auth/ResetPasswordPage";
import HomePage from "../pages/home/HomePage";
import LandingPage from "../pages/landing/LandingPage";
import AddMixtapePage from "../pages/mixtapes/AddMixtapePage";
import MyMixtapePage from "../pages/mixtapes/MyMixtapePage";
import SingleMixtapePage from "../pages/mixtapes/SingleMixtapePage";
import MusicPage from "../pages/music/MusicPage";

const routes = [
  {
    key: "/home",
    path: "/home",
    component: HomePage,
  },
  {
    key: "/music",
    path: "/music",
    component: MusicPage,
  },
  {
    key: "/mixtapes",
    path: "/myMixtapes",
    component: MyMixtapePage,
  },
  {
    key: "/mixtapes/create",
    path: "/mixtapes/create",
    component: AddMixtapePage,
  },
  {
    key: "/mixtapes/:mixtapeId",
    path: "/mixtapes/:mixtapeId",
    component: SingleMixtapePage,
  },
  {
    key: "/authentication",
    path: "/authentication",
    component: AuthPage,
  },
  {
    key: "/restPassword",
    path: "/resetPassword/:resetToken",
    component: ResetPasswordPage,
  },
  {
    key: "/",
    path: "/",
    component: LandingPage,
  },
];

export default routes;
