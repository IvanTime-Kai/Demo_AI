import SiderBar from "../components/SiderBar/Siderbar";
import UserLogin from "../pages/UserLogin/UserLogin";

export const ClientRoutes = [
    // {
    //     path: '/',
    //     Component : SiderBar,
    //     exact : true,
    //     isPrivate : true
    // },
    // {
    //     path : '/home',
    //     Component : SiderBar,
    //     exact : true,
    //     isPrivate : true
    // }
    {
        path: '/',
        Component : UserLogin,
        exact : true,
        isPrivate : true
    },
    {
        path: '/login',
        Component : UserLogin,
        exact : true,
        isPrivate : true
    }
]