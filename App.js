import React from "react";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import ReactDOM  from "react-dom/client";
import About from "./src/components/About";
import Error from "./src/components/Error";
import Contact from "./src/components/Contact";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import RestDetails from "./src/components/RestDetails";
const AppLayout=()=>{
    return(
        <div>
            <Header/>
           <Outlet/>
        </div>
    )
}
const appRout=createBrowserRouter([{
    path:'/',
    element:<AppLayout/>,
    children:[
        {
            path:'/',
            element:<Body/>
        },
        {
            path:'/About',
            element:<About/>
        },
        {
            path:'/Contact',
            element:<Contact/>
        },
        {
            path:'/RestDetails/:resId',
            element:<RestDetails/>
        }
    ],
    errorElement:<Error/>
}])
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRout}/>)