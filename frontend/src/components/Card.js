import React from "react";

const Card = (props) => {
  return (
    <div className="col" key={props.info._id}>
      <div className="card bg-danger mb-3">
        <div className="card-header">{props.info.title}</div>
        <div className="card-body">
          <h4 className="card-title">{props.info.company}</h4>
          <p className="card-text">{props.info.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
