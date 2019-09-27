import React from "react";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Breadcrumb from "react-bootstrap/Breadcrumb";
class AddClassroomPage extends React.Component {

  constructor(props)
  {
    super(props);
    this.state = {name : ""}
    this.state ={capacity: ""}
  }
  addClassroom(event) {

      event.preventDefault();

      let params = {
          name: this.state.name,
          capacity: this.state.capacity
      };

      const searchParams = Object.keys(params).map((key) => {
          return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
      }).join('&');

   fetch("http://localhost:8080/classrooms/add?" + searchParams, {
      mode: "cors",
      method: "POST",
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
            this.props.history.push('/classrooms');
        },

        error => {
          console.log(error);
        }
      );
  }

  handleNameChange(event)
  {
    this.setState({name : event.target.value});
  }
  handleCapacityChange(event)
  {
    this.setState({capacity: event.target.value});
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
          <div className="loginWrapper">
            <Form onSubmit={this.addClassroom.bind(this)}>
              <Form.Group controlId="name">
                <Form.Label>Име</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Внеси име на просторија"
                 onChange={this.handleNameChange.bind(this)}/>
                <Form.Group controlId="capacity">
                  <Form.Label>Капацитет</Form.Label>
                  <Form.Control type="text" placeholder="Внеси капацитет" onChange={this.handleCapacityChange.bind(this)} />
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
