import React, {useEffect} from 'react';
import AppRouter from "./components/AppRouter";
import "./styles/App.scss"
import Navbar from "./components/Navbar/Navbar";
import {useAppDispatch} from "./hooks/reduxHooks";
import IPAddressAPI from "./services/IPAddressAPI";
import {setLocation} from "./redux/slices/locationSlice";

function App() {
    const dispatch = useAppDispatch()

    useEffect(() => {
        /* asynchronous getting user`s location by ip, dispatching it into redux */
        (async () => {
            const location = await IPAddressAPI.getLocationByIP()
            if(location) {
                dispatch(setLocation(location))
            }
        })()
    }, [])

    return (
        <div className="App">
            <Navbar/>
            <AppRouter/>
        </div>
    );
}

export default App;
