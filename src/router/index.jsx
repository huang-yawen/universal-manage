import { Navigate, Outlet } from 'react-router'
import Home from '../pages/Home'
import { createBrowserRouter } from "react-router";
import Mall from '../pages/Mall'
import User from '../pages/User'
import PageOne from '../pages/other/pageOne'
import PageTwo from '../pages/other/pageTwo'
import Main from '../pages/main';
const routes = [
    {
        path: '/',
        element: <Main />,
        children: [
            {
                index: true,
                element: <Navigate to="/home" replace />
            },
            {
                path: 'home',
                element: <Home />
            },
            {
                path: 'mall',
                element: <Mall />
            },
            {
                path: 'user',
                element: <User />
            },
            {
                path: 'other',
                element: <Outlet />,
                children: [
                    {
                        index: true,
                        element: <Navigate to="/other/pageOne" replace />
                    },
                    {
                        path: 'pageOne',
                        element: <PageOne />
                    },
                    {
                        path: 'PageTwo',
                        element: <PageTwo />
                    }
                ]
            }
        ]
    }
]

const router = createBrowserRouter(routes)
export default router;
