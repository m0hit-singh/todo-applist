import React from "react";
import "../styles/App.css";
import Home from "../routes/layout/components/home.component";
import LoginComponent from "../routes/login/components/login.component";
import User from "../routes/user/components/user.component";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import * as redux from "redux";
import thunk from "redux-thunk";
import { applyMiddleware, compose, createStore } from "redux";
import reducer from "../store/reducers";
import { Provider } from "react-redux";
import PrivateRoute from "../library/components/private-route";
import history from "../store/history";

redux.__DO_NOT_USE__ActionTypes.REPLACE = "@@redux/INIT";

const composeEnhancers =
  process.env.NODE_ENV !== "production" &&
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(reducer, enhancer);

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          {/* <Route exact path="/" component={LoginComponent} /> */}
          <Route path="/" component={Home} />
          <PrivateRoute path="/users" component={User} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
