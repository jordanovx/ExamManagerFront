import React from "react";
import Footer from "../components/Footer";
import Login from "../components/Login";

class LoginPage extends React.Component {
  render() {
    return (
      <div>
        <Login />
        <Footer />
      </div>
    );
  }
}

export default LoginPage;
