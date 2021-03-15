import './App.css';
import { Cart } from './pages/cart/cart.container'
import { Success } from './pages/success/success.container'
import React, { useEffect, useState } from 'react';

function App() {

    const [state, setState] = useState(true);

    const showSuccessPage = (e) => {
        setState(e);
    }

    return (
        <div className="App">
            { state
                ? <Cart onBuyButtonCheck={(e) => showSuccessPage(e)} />
                : <Success />
            }
        </div>
    );
}

export default App;
