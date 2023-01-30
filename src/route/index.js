import React  from "react";
import { Navigate } from "react-router";

// const Layout = React.lazy(() => import('@/pages/layout'))
const Home = React.lazy(() => import('../pages/home'))
const List = React.lazy(() => import('../pages/list'))
const News = React.lazy(() => import('../pages/news'))
const Profile = React.lazy(() => import('../pages/profile'))
const City = React.lazy(() => import('../pages/city'))
const Map = React.lazy(() => import('../pages/map'))
const Login = React.lazy(() => import('../pages/login'))
const Favotate = React.lazy(() => import('../pages/favorate'))
const Rent = React.lazy(() => import('../pages/rent'))
const Add = React.lazy(() => import('../pages/RentAdd'))

const routes = [
    {
        path: '/',
        element:<Navigate to='/home' />
    },
    {
        path: '/home',
        element: <Home />,
        children: [
            {
                path: '/home/list',
                element:<List/>
            },
            {
                path: '/home/news',
                element:<News/>
            },
            {
                path: '/home/profile',
                element:<Profile/>
            }
        ]
    },
    {
        path: '/city',
        element:<City/>
    },
    {
        path: '/map',
        element:<Map/>
    },
    {
        path: '/login',
        element:<Login/>
    },
    {
        path: '/favorate',
        element:<Favotate/>
    },
    {
        path: '/rent',
        element: <Rent />,
        children: [
            {
                path: '/rent/add',
                element:<Add/>
            }
        ]
    }

]
export default routes