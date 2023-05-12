import React from 'react';
import AppRouter from "./components/AppRouter";
import "./styles/App.scss"
import Navbar from "./components/Navbar/Navbar";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <AppRouter/>
        </div>
    );
}

export default App;
