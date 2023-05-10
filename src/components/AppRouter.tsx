import React from 'react';
import {Routes, Route} from "react-router-dom";
import {routes} from "../consts/routes";

/* Renders all possible routes. Renders by using .map() method on {routes} mock array */
const AppRouter = () => {
    return (
        <Routes>
            {routes.map(route => <Route path={route.path} element={route.element} key={route.path}/>)}
        </Routes>
    );
};

export default AppRouter;