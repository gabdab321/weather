import MainPage from "../pages/MainPage/MainPage";
import ForecastPage from "../pages/ForecastPage/ForecastPage";

interface route {
    path: string
    element: JSX.Element
}

/* An array of all possible routes in the app */
export const routes: route[] = [
    {path: "/", element: <MainPage/>},
    {path: "/forecast/:date", element: <ForecastPage/>}
]