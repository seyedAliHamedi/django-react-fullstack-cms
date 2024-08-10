import React, { Component } from "react";
import CustomForm from "./../components/CustomForm";
export default class Register extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <CustomForm route={"/api/register/"} method="register" />;
  }
}
