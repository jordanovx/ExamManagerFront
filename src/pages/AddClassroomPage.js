import React from "react";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Breadcrumb from "react-bootstrap/Breadcrumb";
class AddClassroomPage extends React.Component {
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
          <Breadcrumb.Item href="/addclassroom">Просторија</Breadcrumb.Item>
          <Breadcrumb.Item active>Додади</Breadcrumb.Item>
        </Breadcrumb>
        <div className="wrapper">
          <div className="classroomWrapper">
            <Form>
              <Form.Group controlId="formGroupEmail">
                <Form.Label>Име</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Внеси име на просторија"
                />
                <Form.Group controlId="formGroupPassword">
                  <Form.Label>Капацитет</Form.Label>
                  <Form.Control type="text" placeholder="Внеси капацитет" />
                </Form.Group>
              </Form.Group>
              <Form.Group>
                <Button type="btn-primary">Додади</Button>
              </Form.Group>
            </Form>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default AddClassroomPage;
