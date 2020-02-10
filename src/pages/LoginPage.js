import React from "react";
import Login from "../components/Login";
import NavigationBar from "../components/NavigationBar";
class LoginPage extends React.Component {
  render() {
    return (
      <div>
        <NavigationBar className="nav"> </NavigationBar>
        <Login />
      </div>
    );
  }
}

export default LoginPage;
