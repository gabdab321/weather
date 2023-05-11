import React, {useEffect} from 'react';
import AppRouter from "./components/AppRouter";
import "./styles/App.scss"
import Navbar from "./components/Navbar/Navbar";
import AutoCompleteAPI from "./services/AutoCompleteAPI";

function App() {
    useEffect(() => {
        async function getAutocomplete() {
            const data = await AutoCompleteAPI.placeAutocomplete("Киї", "uk")
            console.log(data)
        }

        getAutocomplete()
    }, [])

    return (
        <div className="App">
            <Navbar/>
            <AppRouter/>
        </div>
    );
}

export default App;
