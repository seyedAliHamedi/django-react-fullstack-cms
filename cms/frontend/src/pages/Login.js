import React, { Component } from "react";
import CustomForm from "./../components/CustomForm";
export default class Login extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <CustomForm route={"/api/token/"} method="login" />;
  }
}
