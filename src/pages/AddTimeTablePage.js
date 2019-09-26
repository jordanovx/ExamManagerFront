import React from "react";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Breadcrumb from "react-bootstrap/Breadcrumb";
class AddTimeTablePage extends React.Component {
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
          <Breadcrumb.Item href="/addtimetable">Распоред</Breadcrumb.Item>
          <Breadcrumb.Item active>Додади</Breadcrumb.Item>
        </Breadcrumb>
        <div className="wrapper">
          <div className="classroomWrapper">
            <Form>
              <Form.Group controlId="formGroupSubject">
                <Form.Label>Предмет</Form.Label>
                <Form.Control type="text" placeholder="избери предмет" />
              </Form.Group>
              <Form.Group controlId="formGroupSemester">
                <Form.Label>Семестар</Form.Label>
                <Form.Control type="text" placeholder="избери семестар" />
              </Form.Group>

              <Form.Group controlId="formGroupSemester">
                <Form.Label>Семестар</Form.Label>
                <Form.Control as="select">
                  <option>Летен</option>
                  <option>Зимски</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="formGroupDate">
                <Form.Label>Дата</Form.Label>
                <Form.Control type="text" placeholder="избери датум" />
              </Form.Group>
              <Form.Group controlId="formGroupStartExam">
                <Form.Label>Почеток на испит</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Внеси почеток на испит"
                />
              </Form.Group>
              <Form.Group controlId="formGroupEndExam">
                <Form.Label>Крај на испит</Form.Label>
                <Form.Control type="text" placeholder="Внеси крај на испит" />
              </Form.Group>
              <Form.Group controlId="formGroupTeachers">
                <Form.Label>Професори</Form.Label>
                <Form.Control type="text" placeholder="Одбери професор" />
              </Form.Group>
              <Form.Group controlId="formGroupClassRooms">
                <Form.Label>Простории</Form.Label>
                <Form.Control type="text" placeholder="Одбери простории" />
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

export default AddTimeTablePage;