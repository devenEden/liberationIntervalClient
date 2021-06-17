import HomePage from "../pages/home/HomePage";
import MusicPage from "../pages/music/MusicPage";

const protectedRoutes = [
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
];

export default protectedRoutes;
