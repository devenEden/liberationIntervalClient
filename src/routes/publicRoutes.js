import AuthPage from "../pages/auth/AuthPage";
import HomePage from "../pages/home/HomePage";


const publicRoutes = [
     {
         key:'auth',
         path:'/authentication',
         component:AuthPage
     },
     {
         key:'/',
         path:'/',
         component:HomePage
     }
]

export default publicRoutes;