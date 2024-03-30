import { Outlet, createBrowserRouter } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";
import { FC } from "react";
import Navbar from "../components/Navbar/Navbar";
import Discounts from "../components/Discounts/Discounts";
import Rolls from "../components/Rolls/Rolls";
import Sets from "../components/Sets/Sets";
import Drinks from "../components/Drinks/Drinks";
import Sauces from "../components/Sauces/Sauces";
import Footer from "../components/Footer/Footer";


const AppLayout: FC = () => (
    <>
        <Navbar />
        <Outlet />
        <Footer />
    </>
)

export const router = createBrowserRouter([
    {
        element: <AppLayout />,
        errorElement: <h1>Ooooops, wrong route</h1>,
        children: [
            {
                path: AppRoutes.MAIN,
                element: <h1>It's main page</h1>
            },
            {
                path: AppRoutes.DISCOUNTS,
                element: <Discounts />
            },
            {
                path: AppRoutes.ROLLS,
                element: <Rolls />
            },
            {
                path: AppRoutes.SETS,
                element: <Sets />
            },
            {
                path: AppRoutes.DRINKS,
                element: <Drinks />
            },
            {
                path: AppRoutes.SAUCES,
                element: <Sauces />
            },
        ]
    }
  ]);