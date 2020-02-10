import React from "react";
import { Alert, Table } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import NavigationBar from "../components/NavigationBar";
class SessionPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: false };
  }

  getSessions() {
    fetch("http://localhost:8080/timetables", {
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
    this.getSessions();
  }

  render() {
    return (
      <div>
        <NavigationBar className="nav"> </NavigationBar>
        <Breadcrumb className="troski">
          <Breadcrumb.Item href="/">Почетна</Breadcrumb.Item>
          <Breadcrumb.Item href="/session">Сесии</Breadcrumb.Item>
          <Breadcrumb.Item active>Преглед</Breadcrumb.Item>
        </Breadcrumb>
        <div className="wrapper">
          <div className="sessionTable">
            {this.state.data ? (
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th> </th>
                    <th>Сесија</th>
                    <th>Почеток</th>
                    <th>Крај</th>
                    <th>Вкупно саати</th>
                    <th>Вкупно професори</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.data.map((item, i) => (
                    <tr>
                      <td> {i + 1}</td>
                      <td> {item.session} </td>
                      <td> {item.start_date}</td>
                      <td> {item.end_date}</td>
                      <td> {item.total_hours}</td>
                      <td> {item.total_teachers}</td>
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

export default SessionPage;
