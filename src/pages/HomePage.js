import React from "react";
import ButtonHome from "../components/ButtonHome";
import NavigationBar from "../components/NavigationBar";
class HomePage extends React.Component {
  render() {
    return (
      <div>
        <NavigationBar className="nav"> </NavigationBar>
        <div className="wrapper">
          <ButtonHome />
        </div>
      </div>
    );
  }
}

export default HomePage;
