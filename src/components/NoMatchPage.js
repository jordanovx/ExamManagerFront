import React from "react";

class NoMatchPage extends React.Component {
  render() {
    return (
      <div className="wrapperError">
        <section className="not-found">
          <div className="circles">
            <p>
              404
              <br />
              <small>PAGE NOT FOUND</small>
            </p>
            <span className="circle big"></span>
            <span className="circle med"></span>
            <span className="circle small"></span>
          </div>
        </section>
      </div>
    );
  }
}

export default NoMatchPage;
