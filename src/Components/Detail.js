import React from "react";
import "bootstrap/dist/css/bootstrap.css";
const Detail = (props) => {
  return (
    <div className="container">
      <div className="jumbotron jumbotron-fluid">
        <h2 className="text-center"> Detait of User</h2>
      </div>

      {props.Detail.length > 0 ? (
        props.Detail.map((key, index) => {
          return (
            <div key={index} className="card">
              {index === 4 ? (
                <img className="card-img-top" src={key} alt="Images" />
              ) : (
                <p className="card-body">{key}</p>
              )}
            </div>
          );
        })
      ) : (
        <h1> </h1>
      )}
    </div>
  );
};

export default Detail;
