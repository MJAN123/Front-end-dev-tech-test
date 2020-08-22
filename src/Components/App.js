import React from "react";
import ShowList from "./ShowList";
import Detail from "./Detail";
import "bootstrap/dist/css/bootstrap.css";
import "../Style/style.css";

var page = 1;

class App extends React.Component {
  state = {
    user: [],
    UserDetail: [],
    page: page,
  };

  next = () => {
    this.setState({ page: ++page });
  };
  previuse = () => {
    this.setState({ page: --page });
  };
  currentUser = (obj) => {
    this.setState({ UserDetail: Object.values(obj) });
  };

  getSort = (props) => {
    return function (a, b) {
      if (a[props] > b[props]) return 1;
      else if (a[props] < b[props]) return -1;
      return 0;
    };
  };

  runApi = () => {
    fetch(`https://reqres.in/api/users?page=${this.state.page}`)
      .then((response) => response.json())
      .then((data) =>
        this.setState({ user: data.data.sort(this.getSort("first_name")) })
      );
  };

  render() {
    return (
      <div className="container" onLoad={this.runApi()}>
        <div className="jumbotron jumbotron-fluid">
          <h2 className="text-center">User Infromation Portal</h2>
        </div>
        <div className=" card-columns row">
          <div className="card col-sm-5">
            <div className="card-title">
              <button className="float-right" onClick={this.previuse}>
                Previous
              </button>
              <button className="float-left" onClick={this.next}>
                Next
              </button>
            </div>
            <div className="card-body">
              <ShowList arr={this.state.user} currentUser={this.currentUser} />
            </div>
          </div>
          <div className="card col-sm-5">
            <div className="card-body">
              <Detail Detail={this.state.UserDetail} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
