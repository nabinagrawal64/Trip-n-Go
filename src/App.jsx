import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "./pages/HomePage";
import { Layout } from "./components/Layout";
import { ErrorPage } from "./pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        errorElement: <ErrorPage />,
        children: [
            { path: "/", element: <HomePage /> },
            // { path: "/", element: <ErrorPage/> },
        ],

    }
])


export default function App() {
    return <RouterProvider router={router}> </RouterProvider>
}

