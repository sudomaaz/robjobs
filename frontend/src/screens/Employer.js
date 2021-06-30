import React, { useEffect } from "react";
import Spinner from "../components/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { jobUserAction } from "../actions/job";
import { Redirect } from "react-router-dom";

const Employer = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userReducer);
  const { loading, users, error } = useSelector(
    (state) => state.jobUserReducer
  );
  useEffect(() => {
    if (!user) return;
    dispatch(jobUserAction(user._id));
  }, [dispatch, user]);
  if (!user) {
    return <Redirect to="/login" />;
  }
  return (
    <>
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8">
          <h1>Your Posted Jobs</h1>
          {loading ? (
            <Spinner />
          ) : error ? (
            <div className="alert alert-primary mt-3" role="alert">
              {error}
            </div>
          ) : users.length ? (
            <div className="row row-cols-1 row-cols-md-3 g-3 mt-3">
              {users.map((j) => (
                <>
                  <h1 className="text-center">{j.title}</h1>
                  <div>{j.applied}</div>
                </>
              ))}
            </div>
          ) : (
            <p className="text-center mt-5">You havent posted any jobs yet..</p>
          )}
        </div>
        <div className="col-2"></div>
      </div>
    </>
  );
};

export default Employer;
