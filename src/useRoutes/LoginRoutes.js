import { lazy } from "react";

const LoginPage = lazy(()=>import('../pages/InitialPage/Login'))

const LoginRoutes = {
 path:'/login',
 element:<LoginPage/>
}

export default LoginRoutes;