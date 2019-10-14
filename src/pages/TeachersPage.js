import React from "react";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import { Table } from "react-bootstrap";

import Breadcrumb from "react-bootstrap/Breadcrumb";
class TeachersPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: false };
  }

  getTeachers() {
    fetch("http://localhost:8080/professors", {
      mode: "cors",
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
        // 'Content-Type': 'application/x-www-form-urlencoded',
      }
    })
      .then(res => res.json())
      .then(
        result => {
          console.log(result);
          this.setState({ data: Object.values(result) });
        },
        error => {
          console.log(error);
        }
      );
  }

  componentDidMount() {
    console.log(this.getTeachers());
  }

  render() {
    return (
      <div>
        <Breadcrumb className="troski">
          <Breadcrumb.Item href="/">Почетна</Breadcrumb.Item>
          <Breadcrumb.Item href="/teachers">Професори</Breadcrumb.Item>
          <Breadcrumb.Item active>Преглед</Breadcrumb.Item>
        </Breadcrumb>
        <div className="wrapper">
          <div className="classroomsTable">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th></th>
                  <th>Име на професор</th>
                  <th>Презиме</th>
                </tr>
              </thead>
              <tbody>
                {this.state.data
                  ? this.state.data.map((item, i) => (
                      <tr>
                        {" "}
                        <td> {i + 1}</td> <td> {item.name}</td>{" "}
                        <td> {item.surname}</td>
                      </tr>
                    ))
                  : ""}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    );
  }
}

export default TeachersPage;
