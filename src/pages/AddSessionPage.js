import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Breadcrumb from "react-bootstrap/Breadcrumb";
class AddSessionPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
    this.state = { session_start: "" };
    this.state = { session_end: "" };
    this.state = { total_hours: "" };
    this.state = { professor_count: "" };
  }
  addSession(event) {
    event.preventDefault();

    let params = {
      session: this.state.name,
      start_date: this.state.session_start,
      end_date: this.state.session_end,
      total_teachers: this.state.professor_count,
      total_hours: this.state.total_hours
    };

    const searchParams = Object.keys(params)
      .map(key => {
        return encodeURIComponent(key) + "=" + encodeURIComponent(params[key]);
      })
      .join("&");

    fetch("http://localhost:8080/timetables/add?" + searchParams, {
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
        },
        error => {
          console.log(error);
        }
      );
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }
  handleSessionStartChange(event) {
    this.setState({ session_start: event.target.value });
  }
  handleSessionEndChange(event) {
    this.setState({ session_end: event.target.value });
  }
  handleTotalHoursChange(event) {
    this.setState({ total_hours: event.target.value });
  }
  handleProfessorCountChange(event) {
    this.setState({ professor_count: event.target.value });
  }

  render() {
    return (
      <div>
        <Breadcrumb className="troski">
          <Breadcrumb.Item href="/">Почетна</Breadcrumb.Item>
          <Breadcrumb.Item href="/session">Сесии</Breadcrumb.Item>
          <Breadcrumb.Item active>Додади</Breadcrumb.Item>
        </Breadcrumb>
        <div className="wrapper">
          <div className="loginWrapper">
            <Form onSubmit={this.addSession.bind(this)}>
              <Form.Group controlId="name">
                <Form.Label>Име</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Внеси име на сесија"
                  onChange={this.handleNameChange.bind(this)}
                />
              </Form.Group>
              <Form.Group controlId="sessionStart">
                <Form.Label>Почеток на сесија</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Внеси почеток на сесија"
                  onChange={this.handleSessionStartChange.bind(this)}
                />
                <Form.Group controlId="sessionEnd">
                  <Form.Label>Крај на сесија</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Внеси крај на сесија"
                    onChange={this.handleSessionEndChange.bind(this)}
                  />
                </Form.Group>
                <Form.Group controlId="totalHours">
                  <Form.Label>Вкупни часеви</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Внеси вкупни часеви"
                    onChange={this.handleTotalHoursChange.bind(this)}
                  />
                </Form.Group>
                <Form.Group controlId="totalTeachers">
                  <Form.Label>Вкупно професори</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Внеси број на професори"
                    onChange={this.handleProfessorCountChange.bind(this)}
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

export default AddSessionPage;
