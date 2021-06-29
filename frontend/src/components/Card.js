import React from "react";
const Card = (props) => {
  return (
    <div className="col">
      <div className="card bg-light mb-3 h-100">
        <div className="card-header bg-warning">{props.info.title}</div>
        <div className="card-body">
          <h4 className="card-title">{props.info.company}</h4>
          <p className="card-text">{props.info.description}</p>
          <p className="card-text">{props.info.category}</p>
          <p className="card-text">{props.info.experience}</p>
          <p className="card-text">
            {props.info.ctcMin}L - {props.info.ctcMax}L
          </p>
          <p className="card-text">{props.info.location}</p>
        </div>
        <div className="card-footer d-grid gap-2">
          <button
            onClick={() => props.call(props.info._id)}
            type="button"
            className="btn btn-lg btn-primary btn-block"
            disabled={props.dashboard}
          >
            {props.dashboard ? "Applied" : "Apply"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
