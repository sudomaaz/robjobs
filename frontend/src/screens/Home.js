import React, { useEffect } from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Spinner from "../components/Spinner";
import { useDispatch, useSelector } from "react-redux";
import jobAction from "../actions/job";
import { useLocation } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { loading, error, jobs } = useSelector((state) => state.jobReducer);
  useEffect(() => {
    dispatch(jobAction(location.search));
  }, [dispatch, location.search]);
  return (
    <>
      <Header />
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
                <Card key={j._id} info={j} />
              ))}
            </div>
          ) : null}
        </div>
        <div className="col-2"></div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
