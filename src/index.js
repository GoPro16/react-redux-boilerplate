import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link
} from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import Home from "./components/Home";
import Test from "./components/Test";
import reducers from "./redux-store";

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/test" component={Test} />
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById("root")
);