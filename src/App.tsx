import React from 'react';
import AppRouter from "./components/AppRouter";
import "./styles/App.scss"
import Navbar from "./components/Navbar/Navbar";
import {useAppDispatch} from "./hooks/reduxHooks";
import getPrimaryGeolocation from "./utils/getPrimaryGeolocation/getPrimaryGeolocation";

function App() {
    const dispatch = useAppDispatch()
    getPrimaryGeolocation(dispatch)

    return (
        <div className="App">
            <Navbar/>
            <AppRouter/>
        </div>
    );
}

export default App;
