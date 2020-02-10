import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import NavigationBar from "../components/NavigationBar";
import Breadcrumb from "react-bootstrap/Breadcrumb";
class AddTeachersPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
    this.state = { surname: "" };
  }

  addTeacher(event) {
    event.preventDefault();

    let params = {
      name: this.state.name,
      surname: this.state.surname,
      abilities: ""
    };

    const searchParams = Object.keys(params)
      .map(key => {
        return encodeURIComponent(key) + "=" + encodeURIComponent(params[key]);
      })
      .join("&");

    fetch("http://localhost:8080/professors/add?" + searchParams, {
      mode: "cors",
      method: "POST",
      headers: {
        Accept: "application/json",
        //"Content-Type": "application/json"
        "Content-Type": "application/x-www-form-urlencoded"
      }
    })
      .then(res => res.text())
      .then(
        result => {
          console.log(result);
          this.props.history.push("/teachers");
        },

        error => {
          console.log(error);
        }
      );
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }
  handleSurnameChange(event) {
    this.setState({ surname: event.target.value });
  }
  render() {
    return (
      <div>
        <NavigationBar className="nav"> </NavigationBar>
        <Breadcrumb className="troski">
          <Breadcrumb.Item href="/">Почетна</Breadcrumb.Item>
          <Breadcrumb.Item href="/addteachers">Професори</Breadcrumb.Item>
          <Breadcrumb.Item active>Додади</Breadcrumb.Item>
        </Breadcrumb>
        <div className="wrapper">
          <div className="loginWrapper">
            <Form onSubmit={this.addTeacher.bind(this)}>
              <Form.Group controlId="formGroupEmail">
                <Form.Label>Име</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Внеси име на професор"
                  onChange={this.handleNameChange.bind(this)}
                />
                <Form.Group controlId="formGroupPassword">
                  <Form.Label>Презиме</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Внеси презиме на професор"
                    onChange={this.handleSurnameChange.bind(this)}
                  />
                </Form.Group>
              </Form.Group>
              <Form.Group>
                <Button type="btn-primary">Додади</Button>
              </Form.Group>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddTeachersPage;
