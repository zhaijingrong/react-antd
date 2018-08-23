import React, { Component } from 'react';
import './App.css';
import DefaultLayout from './containers';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import rootReducer from './reducers';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Router, Route, Switch } from 'react-router-dom';
import Login from './components/auth/signin';
import Logout from './components/auth/signout'
import history from './history';

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(reduxThunk, logger)
    )
);

const token = localStorage.getItem('jwt');


if(token) {
    store.dispatch({ type: "AUTH_USER" });
    console.log(store);
}


class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <Router history={history}>
                <Switch>
                    <Route exact path="/login" name="Login" component={Login} />
                    <Route exact path="/logout" name="Logout" component={Logout} />
                    <Route path="/" name="Home" component={DefaultLayout} />
                </Switch>
            </Router>
        </Provider>
    );
  }
}

export default App;
