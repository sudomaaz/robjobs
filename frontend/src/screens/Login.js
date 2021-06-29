import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLoginAction } from "../actions/user";
import Spinner from "../components/Spinner";
import { Redirect } from "react-router-dom";
const Login = () => {
  const formRef = useRef(null);
  const dispatch = useDispatch();
  const { loading, error, user } = useSelector((state) => state.userReducer);
  if (user) {
    return <Redirect to="/" />;
  }
  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      email: formRef.current.email.value,
      password: formRef.current.password.value,
    };
    dispatch(userLoginAction(data));
  };
  return (
    <div className="row mt-5">
      <div className="col-4"></div>
      <div className="col-4">
        {loading ? (
          <Spinner />
        ) : error ? (
          <div className="alert alert-danger mt-3" role="alert">
            {error}
          </div>
        ) : null}
        <legend>
          <h1>Login Here</h1>
        </legend>
        <form
          method="POST"
          ref={formRef}
          onSubmit={(e) => submitHandler(e)}
          encType="multipart/form-data"
        >
          <div className="form-group row mt-2">
            <label htmlFor="email" className="form-label">
              Email*
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Enter login email"
            />
          </div>
          <div className="form-group row mt-2">
            <label htmlFor="password" className="form-label">
              Password*
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Enter login password"
            />
          </div>
          <div className="form-group row mt-3">
            <button type="submit" className="btn btn-primary btn-lg btn-block">
              Login
            </button>
          </div>
        </form>
        <div className="col-4"></div>
      </div>
    </div>
  );
};

export default Login;
