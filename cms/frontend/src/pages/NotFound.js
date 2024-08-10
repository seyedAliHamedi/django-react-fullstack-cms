import { Component } from "react";

export default class NotFound extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>404 Not Found.</h1>
        <p>The page you're looking for doesn't exist</p>
      </div>
    );
  }
}
