import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import FourNotFourPage from './page/404/FourNotFourPage';

import PaymentPage from './page/payment/PaymentPage';

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/payment" />
                    </Route>

                    <Route exact path="/payment">
                        <PaymentPage />
                    </Route>

                    <Route path="*">
                        <FourNotFourPage />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
