import Main from '../pages/main'
import Home from '../pages/Home'
import { createBrowserRouter } from "react-router";
import Mall from '../pages/Mall'
import User from '../pages/User'
import Other from '../pages/User'
import PageTwo from '../pages/other/PageTwo'
const routes = [
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: 'home',
                element: <Home />
            },
            {
                path:'mall',
                element: <Mall />
            },
            {
                path:'user',
                element:<User />
            },
            {
                path:'other',
                children:[
                    {
                        path:'pageOne',
                        element:<PageOne />
                    },
                    {
                        path:'PageTwo',
                        element:<PageTwo />
                    }
                ]
            }
        ]
    }
]

const router = createBrowserRouter(routes)
export default router;
