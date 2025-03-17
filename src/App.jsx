/* eslint-disable no-unused-vars */
import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "./pages/HomePage";
import { Layout } from "./components/Layout";
import { ErrorPage } from "./pages/ErrorPage";
import DashBoard from "./pages/Dashboard";
import CarDetails from "./pages/CarDetails";
import SearchResult from "./pages/SearchResult";
import Profile from "./components/Dashboard/user/Profile";
import Favorites from "./components/Dashboard/user/Favorites";
import Bookings from "./components/Dashboard/user/BookedVehicles";
import Posts from "./components/Dashboard/user/Posts";
import History from "./components/Dashboard/user/History";
import Reviews from "./components/Dashboard/user/Reviews";
import Vehicles from "./components/Dashboard/user/MyVehicles";
import BookedVehicles from "./components/Dashboard/user/BookedVehicles";
import CabBooking from "./pages/BookingUi";
import Confirmation from "./pages/Confirmation";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        errorElement: <ErrorPage />,
        children: [
            { path: "/", element: <HomePage /> },
            // dashboard
            { 
                path: "/dashboard", 
                element: <DashBoard />, 
                children: [
                    {path: "profile", element: <Profile />},
                    { path: "favorites", element: <Favorites /> },
                    { path: "bookings", element: <Bookings /> },
                    { path: "posts", element: <Posts /> },
                    { path: "history", element: <History /> },
                    { path: "reviews", element: <Reviews /> },
                    { path: "vehicles", element: <Vehicles /> },
                    { path: "booked-vehicles", element: <BookedVehicles />},
                ]
            },

            { path: "/search", element: <SearchResult /> },
            { path: "/carDetails/:id", element: <CarDetails /> },
            { path: "/booking", element: <CabBooking/>},
            { path: "/booking/confirmation", element: <Confirmation/>},
        ],
    }
])


export default function App() {
    return <RouterProvider router={router}> </RouterProvider>
}

