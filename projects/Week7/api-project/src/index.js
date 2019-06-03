import React from 'react';
import ReactDOM from 'react-dom';
import GlobalProvider from './GlobalProvider'
import {BrowserRouter} from 'react-router-dom'
import './index.css'

import App from './App';

ReactDOM.render(
<GlobalProvider>
    <BrowserRouter>
        <App />
    </BrowserRouter>
</GlobalProvider>, 
document.getElementById('root'));

