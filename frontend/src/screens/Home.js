import React, { useEffect } from "react";
import Search from "../components/Search";
import Card from "../components/Card";
import Spinner from "../components/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { jobAction } from "../actions/job";
import { useLocation } from "react-router-dom";
import { useAlert } from "react-alert";
import { applyAction } from "../actions/job";

const Home = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const alert = useAlert();
  const { loading, error, jobs } = useSelector((state) => state.jobReducer);
  //const { job, error_ } = useSelector((state) => state.applyReducer);
  useEffect(() => {
    dispatch(jobAction(location.search));
  }, [dispatch, location.search]);

  const applyHandler = (id) => {
    dispatch(applyAction(id));
    alert.success("Job applied successfully");
  };

  return (
    <>
      <Search />
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8">
          {loading ? (
            <Spinner />
          ) : error ? (
            <div className="alert alert-primary mt-3" role="alert">
              {error}
            </div>
          ) : jobs ? (
            <div className="row row-cols-1 row-cols-md-3 g-3 mt-3">
              {jobs.map((j) => (
                <Card key={j._id} info={j} call={applyHandler} />
              ))}
            </div>
          ) : null}
        </div>
        <div className="col-2"></div>
      </div>
    </>
  );
};

export default Home;
