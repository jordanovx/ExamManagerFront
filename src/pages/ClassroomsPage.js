import React from "react";

import { Alert, Table } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import NavigationBar from "../components/NavigationBar";
class ClassroomsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: false };
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
    console.log(this.getClassrooms());
  }

  render() {
    return (
      <div>
        <NavigationBar className="nav"> </NavigationBar>
        <Breadcrumb className="troski">
          <Breadcrumb.Item href="/">Почетна</Breadcrumb.Item>
          <Breadcrumb.Item href="/classrooms">Простории</Breadcrumb.Item>
          <Breadcrumb.Item active>Преглед</Breadcrumb.Item>
        </Breadcrumb>
        <div className="wrapper">
          <div className="classroomsTable">
            {this.state.data ? (
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th></th>
                    <th>Име на просторија</th>
                    <th>Капацитет</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.data.map((item, i) => (
                    <tr>
                      {" "}
                      <td> {i + 1}</td> <td> {item.name}</td>{" "}
                      <td> {item.capacity}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            ) : (
              <Alert variant="danger" transition={null}>
                <Alert.Heading>Нема податоци</Alert.Heading>
              </Alert>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default ClassroomsPage;
