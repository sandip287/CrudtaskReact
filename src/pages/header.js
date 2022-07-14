import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">
              React Crud operation
            </a>
          </div>
          <ul className="nav navbar-nav">
            <li className="active">
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Student list</a>
            </li>
            <li>
              <a href="#">Add Student</a>
            </li>
          </ul>
          <button className="btn btn-danger navbar-btn">Button</button>
        </div>
      </nav>
    );
  }
}
