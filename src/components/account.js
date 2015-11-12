import React from "react";
import { connect } from "react-redux";
import Radium from "radium";
import _ from "lodash";

@connect(state => state.data)
@Radium
class Account extends React.Component {
  render() {
    return (
      <div>
        <h1>Account</h1>
        <div>
          "Account"
          <p> 2 any size conversation tokens (if you blow up on reddit) earn more by sharing and getting social signups. </p>
        </div>
      </div>
    );
  }
}

export default Account;