import React from "react";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Breadcrumb from "react-bootstrap/Breadcrumb";
class AddSubjectsPage extends React.Component {
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
          <Breadcrumb.Item href="/addsubjects">Предмети</Breadcrumb.Item>
          <Breadcrumb.Item active>Додади</Breadcrumb.Item>
        </Breadcrumb>
        <div className="wrapper">
          <div className="loginWrapper">
            <Form>
              <Form.Group controlId="formGroupIme">
                <Form.Label>Име</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Внеси име на предметот"
                />
              </Form.Group>
              <Form.Group controlId="formGroupSemester">
                <Form.Label>Семестар</Form.Label>
                <Form.Control as="select">
                  <option>Летен</option>
                  <option>Зимски</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="formGroupSession">
                <Form.Label>Сесија</Form.Label>
                <Form.Control type="text" placeholder="Внеси ја сесијата" />
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

export default AddSubjectsPage;
