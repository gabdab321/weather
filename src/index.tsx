import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";

import "./i18n";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
                <App/>
            </Suspense>
        </BrowserRouter>
    </React.StrictMode>
);