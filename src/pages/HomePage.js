import React from "react";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import ButtonHome from "../components/ButtonHome";
class HomePage extends React.Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <div className="wrapper">
          <ButtonHome />
        </div>
        <Footer />
      </div>
    );
  }
}

export default HomePage;
