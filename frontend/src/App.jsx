import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "./pages/HomePage";
import { Layout } from "./components/Layout";
import { ErrorPage } from "./pages/ErrorPage";
import DashBoard from "./pages/Dashboard";
import CarDetails from "./pages/CarDetails";
import SearchResult from "./pages/SearchResult";
import CabBooking from "./pages/BookingUi";
import Confirmation from "./pages/Confirmation";

// for admin 
import Home from "./components/Dashboard/admin/Home";
import BookingRequest from "./components/Dashboard/admin/BookingRequest";
import MyVehicles from "./components/Dashboard/admin/MyVehicles";
import AddVehicle from "./components/Dashboard/admin/AddVehicle";

// for user
// import Favorites from "./components/Dashboard/user/Favorites";
// import Reviews from "./components/Dashboard/user/Reviews";

//common
import Profile from "./components/Dashboard/Profile";
import Notificattions from "./components/Dashboard/Notifications";
import Posts from "./components/Dashboard/Posts";
import History from "./components/Dashboard/History";
import BookedVehicles from "./components/Dashboard/BookedVehicles";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        errorElement: <ErrorPage />,
        children: [
            { path: "/", element: <HomePage /> },
            // user dashboard
            // { 
            //     path: "/dashboard", 
            //     element: <DashBoard />, 
            //     children: [ 
            //         {path: "profile", element: <Profile />},
            //         { path: "favorites", element: <Favorites /> },
            //         { path: "booked-vehicles", element: <BookedVehicles /> },
            //         { path: "posts", element: <Posts /> },
            //         { path: "history", element: <History /> },
            //         { path: "reviews", element: <Reviews /> },
            //         { path: "notifications", element: <Notificattions /> },
            //     ]
            // },

            // admin dashboard
            { 
                path: "/admin", 
                element: <DashBoard />, 
                children: [ 
                    { path: "", element: <Home /> },
                    { path: "profile", element: <Profile /> },
                    { path: "posts", element: <Posts /> },
                    { path: "history", element: <History /> },
                    { path: "notifications", element: <Notificattions /> },
                    { path: "booking-request", element: <BookingRequest /> },
                    { path: "booked-vehicles", element: <BookedVehicles />},
                    { path: "vehicles", element: <MyVehicles /> },
                    { path: "add-vehicle", element: <AddVehicle /> },

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

