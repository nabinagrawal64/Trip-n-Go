import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "./pages/HomePage";
import { Layout } from "./components/Layout";
import { ErrorPage } from "./pages/ErrorPage";
import DashBoard from "./pages/Dashboard";
import CarDetails from "./pages/CarDetails";
// import Aaa from "./pages/Aaa";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        errorElement: <ErrorPage />,
        children: [
            { path: "/", element: <HomePage /> },
            { path: "/dashboard", element: <DashBoard />},
            { path: "/cars/:id", element: <CarDetails /> },
            // { path: "/cars/:id", element: <Aaa /> },
        ],
    }
])


export default function App() {
    return <RouterProvider router={router}> </RouterProvider>
}

