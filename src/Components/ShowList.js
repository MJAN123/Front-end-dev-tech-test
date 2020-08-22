import React from "react";
import "bootstrap/dist/css/bootstrap.css";

class ShowList extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron jumbotron-fluid">
          <h2 className="text-center"> List Of the Users</h2>
        </div>
        {this.props.arr.length > 0 ? (
          this.props.arr.map((person, index) => (
            <div key={index} className=" card">
              <div
                className="card-body text-center"
                onClick={() => this.props.currentUser(person)}
              >
                <span className="font-weight-bold">{person.first_name}</span>
              </div>
            </div>
          ))
        ) : (
          <h1>No More User</h1>
        )}
      </div>
    );
  }
}

export default ShowList;
