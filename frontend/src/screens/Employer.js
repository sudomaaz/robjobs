import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Spinner from "../components/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { jobUserAction } from "../actions/job";
import { Redirect } from "react-router-dom";
import Table from "../components/Table";

const Employer = () => {
  const [applicant, setApp] = useState(null);
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
  const applicantHandler = (id) => {
    if (users) {
      for (let i = 0; i < users.length; i++) {
        if (users[i]._id === id) {
          setApp([...users[i].applied]);
          break;
        }
      }
    }
  };
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
                <Card
                  key={j._id}
                  info={j}
                  dashboard="employer"
                  call={applicantHandler}
                />
              ))}
            </div>
          ) : (
            <p className="text-center mt-5">You havent posted any jobs yet..</p>
          )}
        </div>
        <div className="col-2"></div>
      </div>
      {applicant ? (
        <div className="row mt-3 text-center">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Experience</th>
                <th scope="col">Resume</th>
              </tr>
            </thead>
            <tbody>
              {applicant.map((j, i) => (
                <Table
                  key={i}
                  name={j.name}
                  email={j.email}
                  experience={j.experience}
                  resume={j.resume}
                />
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
    </>
  );
};

export default Employer;
