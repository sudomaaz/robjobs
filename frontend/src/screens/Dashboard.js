import React, { useEffect } from "react";
import Card from "../components/Card";
import Spinner from "../components/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { userJobAction } from "../actions/user";
import { Redirect } from "react-router-dom";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userReducer);
  const { loading, jobs, error } = useSelector((state) => state.userJobReducer);
  useEffect(() => {
    if (!user) return;
    dispatch(userJobAction(user._id));
  }, [dispatch, user]);
  if (!user) {
    return <Redirect to="/login" />;
  }
  return (
    <>
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8">
          <h1>Your Applied Jobs</h1>
          {loading ? (
            <Spinner />
          ) : error ? (
            <div className="alert alert-primary mt-3" role="alert">
              {error}
            </div>
          ) : jobs.length ? (
            <div className="row row-cols-1 row-cols-md-3 g-3 mt-3">
              {jobs.map((j) => (
                <Card key={j._id} info={j} dashboard={true} />
              ))}
            </div>
          ) : (
            <p className="text-center mt-5">
              You havent applied for jobs yet..
            </p>
          )}
        </div>
        <div className="col-2"></div>
      </div>
    </>
  );
};

export default Dashboard;
