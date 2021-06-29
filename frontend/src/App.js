import React, { useEffect } from "react";
import Home from "./screens/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./screens/Login";
import Register from "./screens/Register";
import "./bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loggedAction } from "./actions/user";
import Employee from "./screens/Employee";
import NewJob from "./screens/NewJob";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loggedAction());
  }, [dispatch]);
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/employee">
          <Employee />
        </Route>
        <Route exact path="/newjob">
          <NewJob />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
