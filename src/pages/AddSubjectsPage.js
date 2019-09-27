import React from "react";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Breadcrumb from "react-bootstrap/Breadcrumb";

class AddSubjectsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: ""};
    this.state = {semester: ""};

}

  addSubject(event) {
      event.preventDefault();

      let params = {
          name: this.state.name,
          semester: this.state.semester
      };

      const searchParams = Object.keys(params).map((key) => {
          return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
      }).join('&');

      fetch("http://localhost:8080/subjects/add?" + searchParams, {
          mode: "cors",
          method: "POST",
          headers: {
              Accept: "application/json",
              //"Content-Type": "application/json"
              'Content-Type': 'application/x-www-form-urlencoded',
          }
      })
          .then(res => res.text())
          .then(
              (result) => {
                  this.props.history.push('/subjects');
                  console.log(result);


              },
              error => {
                  console.log(error);
              }
          );
  }
  handleNameChange(event)
  {
     this.setState({name: event.target.value});
  }
  handleSemesterChange(event)
  {
    this.setState({semester: event.target.value});
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
            <Form onSubmit={this.addSubject.bind(this)}>
              <Form.Group controlId="formGroupIme">
                <Form.Label>Име</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Внеси име на предметот"
                onChange={this.handleNameChange.bind(this)}/>
              </Form.Group>
              <Form.Group controlId="semester">
                <Form.Label>Семестар</Form.Label>
                <Form.Control type="text" placeholder="Внеси го семестарот"
                              onChange={this.handleSemesterChange.bind(this)}/>
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
