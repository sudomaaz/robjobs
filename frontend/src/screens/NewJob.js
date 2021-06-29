import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { jobAddAction } from "../actions/job";
import Spinner from "../components/Spinner";
import { Redirect } from "react-router-dom";

const NewJob = () => {
  const formRef = useRef(null);
  const dispatch = useDispatch();
  const { loading, added, error } = useSelector((state) => state.jobAddReducer);
  if (added) {
    return <Redirect to="/" />;
  }
  const submitHandler = (e) => {
    e.preventDefault();
    const data = new FormData(formRef.current);
    dispatch(jobAddAction(data));
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
        ) : null}
        <legend>
          <h1>Post a new Job</h1>
        </legend>
        <form method="POST" ref={formRef} onSubmit={submitHandler}>
          <div className="form-group row">
            <label htmlFor="company" className="form-label">
              Company*
            </label>
            <input
              type="text"
              className="form-control"
              id="company"
              name="company"
              placeholder="Enter company name"
            />
          </div>
          <div className="form-group row">
            <label htmlFor="title" className="form-label">
              Job Title*
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              placeholder="Enter job title"
            />
          </div>
          <div className="form-group row">
            <label htmlFor="ctcMin" className="form-label">
              Minimum CTC (enter a number)*
            </label>
            <input
              type="text"
              className="form-control"
              id="ctcMin"
              name="ctcMin"
              placeholder="Enter min ctc"
            />
          </div>
          <div className="form-group row">
            <label htmlFor="ctcMax" className="form-label">
              Maximum CTC (enter a number)*
            </label>
            <input
              type="text"
              className="form-control"
              id="ctcMax"
              name="ctcMax"
              placeholder="Enter max ctc"
            />
          </div>
          <div className="form-group row">
            <label htmlFor="description" className="form-label">
              Description*
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              placeholder="Enter job description"
            />
          </div>
          <div className="form-group row">
            <label htmlFor="location" className="form-label">
              Job Location*
            </label>
            <input
              type="text"
              className="form-control"
              id="location"
              name="location"
              placeholder="Enter job location"
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
            <label htmlFor="category" className="form-label">
              Experience*
            </label>
            <select className="form-select" id="category" name="category">
              <option>Information Technology</option>
              <option>Banking and Retail</option>
              <option>Education and Training</option>
              <option>Others</option>
            </select>
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

export default NewJob;
