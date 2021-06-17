import AuthPage from "../pages/auth/AuthPage";
import ResetPasswordPage from "../pages/auth/ResetPasswordPage";

const publicRoutes = [
  {
    key: "auth",
    path: "/authentication",
    component: AuthPage,
  },
  {
    key: "resetPassword",
    path: "/resetPassword/:resetToken",
    component: ResetPasswordPage,
  },
];

export default publicRoutes;
