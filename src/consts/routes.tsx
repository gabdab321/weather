import MainPage from "../pages/MainPage/MainPage";

interface route {
    path: string
    element: JSX.Element
}

/* An array of all possible routes in the app */
export const routes: route[] = [
    {path: "/", element: <MainPage/>}
]