import './App.css';
import { Cart } from './pages/cart/cart.container'
import { Success } from './pages/success/success.container'
import { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {

    // const [state, setState] = useState(true);

    // const showSuccessPage = (e) => {
    //     setState(e);
    // }

    return (
        <div className="App">
            <BrowserRouter>
                <Route path="/">
                    <Cart />
                </Route>
                <Route path="/payment/success">
                    <Success />
                </Route>
            </BrowserRouter>
            {/* { state
                ? <Cart onBuyButtonCheck={(e) => showSuccessPage(e)} />
                : <Success />
            } */}
        </div>
    );
}

export default App;
