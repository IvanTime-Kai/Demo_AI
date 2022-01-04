import SiderBar from "../components/SiderBar/Siderbar";


export const ClientRoutes = [
    {
        path: '/',
        Component : SiderBar,
        exact : true,
        isPrivate : true
    },
    {
        path : '/home',
        Component : SiderBar,
        exact : true,
        isPrivate : true
    }
]