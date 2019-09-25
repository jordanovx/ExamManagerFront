import React from "react";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";

import { Table } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";

class ClassroomsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: "No data" };
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
    return "alo";
  }

  componentDidMount() {
    console.log("Mounted");
    console.log(this.getClassrooms());
  }

  render() {
    return (
      <div>
        <NavigationBar />
        <Breadcrumb className="troski">
          <Breadcrumb.Item href="/">Почетна</Breadcrumb.Item>
          <Breadcrumb.Item href="/classrooms">Простории</Breadcrumb.Item>
          <Breadcrumb.Item active>Преглед</Breadcrumb.Item>
        </Breadcrumb>
        <div className="wrapper">
          <div className="classroomsTable">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th></th>
                  <th>Име на просторија</th>
                  <th>Капацитет</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                </tr>
              </tbody>
            </Table>
            {this.state.data};
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ClassroomsPage;
