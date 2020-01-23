import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FileDrop from 'react-file-drop';
import "rc-time-picker/assets/index.css";
import Breadcrumb from "react-bootstrap/Breadcrumb";

class AddTimeTablePage extends React.Component {
  constructor(props) {
    super(props);

  }

  getClassrooms() {
    fetch("http://localhost:8080/classrooms", {
      mode: "cors",

      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
        // 'Content-Type': 'application/x-www-form-urlencoded',
      }
    })
      .then(res => res.text())
      .then(
        result => {
          console.log(result);
          this.setState({ data: result });
        },

        error => {
          console.log(error);
        }
      );
  }

  componentDidMount() {
  }
  handleDrop = (files, event) => {

      console.log(files, event);
  };

  render() {
      const styles = { border: '1px solid black', width: 600, color: 'black', padding: 20 };
      return (
      <div>
        <Breadcrumb className="troski">
          <Breadcrumb.Item href="/">Почетна</Breadcrumb.Item>
          <Breadcrumb.Item href="/addtimetable">Распоред</Breadcrumb.Item>
          <Breadcrumb.Item active>Додади</Breadcrumb.Item>
        </Breadcrumb>

        <div className="wrapper">
            <div id="react-file-drop" style={{styles}}>
                <FileDrop onDrop={this.handleDrop}>
                   Прикачи распоред
                </FileDrop>
            </div>
        </div>
      </div>
    );
  }
}

export default AddTimeTablePage;
