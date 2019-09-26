import React from "react";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";

import { Table } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";

class SubjectsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data : false}
  }

  getClassrooms() {
    fetch("http://localhost:8080/subjects", {
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
            (result) => {
              console.log(result);
                this.setState({data : Object.values(result)});
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
          <Breadcrumb.Item href="/subjects">Предмети</Breadcrumb.Item>
          <Breadcrumb.Item active>Преглед</Breadcrumb.Item>
        </Breadcrumb>
        <div className="wrapper">
          <div className="classroomsTable">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th></th>
                  <th>Име на предмет</th>
                  <th>Семестар</th>
                  <th>Сесија</th>
                </tr>
              </thead>
                <tbody>
                {(this.state.data) ?  this.state.data.map((item, i) => <tr> <td> {i+1}</td> <td> {item.name}</td> <td> {item.semester}</td></tr>) : "there is no data"}
              </tbody>
            </Table>

          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default SubjectsPage;
