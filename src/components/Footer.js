import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        &copy; {new Date().getFullYear()},
        <a href="https://www.finki.ukim.mk"> Финки </a>
      </div>
    );
  }
}

export default Footer;
