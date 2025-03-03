import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App"
import ErrorPage from "./pages/error";
import Reserve from "./pages/Reservation/Reservation";
import MainHostel from "./pages/Hostel/MainHostel";
import AgenciaPage from "./pages/Agencia/Agencia";
import BedroomPage from "./pages/Bedrooms/Bedroom";
import FoundersPage from "./pages/Founders/Founders";
import DestinationPage from "./pages/Destination/Destination";

const router = createBrowserRouter([

    {
        path: "/",
        errorElement: <ErrorPage />,
        element: <App />,
        children: [
            {
                path: "agencia",
                element: <AgenciaPage />

            },
            {
                path: "/",
                element: <MainHostel />
            },
            {
                path: "reserve",
                element: <Reserve />
            },
            {
                path: "bedrooms",
                element: <BedroomPage />
            },
            {
                path: "ourselves",
                element: <FoundersPage />
            },
            {
                path: "destinations/:id",
                element: <DestinationPage />
            },
        ],
    },
])

export default router;