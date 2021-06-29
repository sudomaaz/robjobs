import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import userAction from "../actions/user";
import Spinner from "../components/Spinner";

const Register = () => {
  const formRef = useRef(null);
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.userReducer);
  const submitHandler = (e) => {
    e.preventDefault();
    const data = new FormData(formRef.current);
    dispatch(userAction(data));
  };
  return (
    <div className="row mt-2">
      <div className="col-2"></div>
      <div className="col-8">
        {loading ? (
          <Spinner />
        ) : error ? (
          error.map((e, i) => (
            <div key={i} className="alert alert-danger mt-3" role="alert">
              {e}
            </div>
          ))
        ) : (
          <div className="alert alert-success mt-3" role="alert">
            User has been registered successfully
          </div>
        )}
        <legend>
          <h1>Register with us</h1>
        </legend>
        <form
          ref={formRef}
          onSubmit={submitHandler}
          encType="multipart/form-data"
        >
          <div className="form-group row">
            <label htmlFor="name" className="form-label">
              Name*
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="Enter your name"
            />
          </div>
          <div className="form-group row mt-2">
            <label htmlFor="email" className="form-label">
              Email*
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Enter your email"
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
              placeholder="Enter your password"
            />
          </div>
          <div className="form-group row mt-2">
            <label htmlFor="experience" className="form-label">
              Experience*
            </label>
            <select className="form-select" id="experience" name="experience">
              <option>Fresher</option>
              <option>1 year - 2 years</option>
              <option>2 years - 5 years</option>
              <option>5+ years</option>
            </select>
          </div>
          <div className="form-group row mt-2">
            <label htmlFor="role" className="form-label">
              Role*
            </label>
            <select className="form-select" id="role" name="role">
              <option>employee</option>
              <option>employer</option>
            </select>
          </div>
          <div className="form-group row mt-2">
            <label htmlFor="resume" className="form-label">
              Resume (mandatory for employee role)
            </label>
            <input
              type="file"
              className="form-control-file"
              id="resume"
              name="resume"
            />
          </div>
          <div className="form-group row mt-3">
            <button type="submit" className="btn btn-primary btn-lg btn-block">
              Submit
            </button>
          </div>
        </form>
        <div className="col-2"></div>
      </div>
    </div>
  );
};

export default Register;
