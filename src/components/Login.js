import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class Login extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="loginWrapper">
          <Form>
            <Form.Group controlId="formGroupEmail">
              <Form.Label>Адреса</Form.Label>
              <Form.Control type="email" placeholder="Адреса" />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
              <Form.Label>Лозинка</Form.Label>
              <Form.Control type="password" placeholder="Лозинка" />
            </Form.Group>
            <Form.Group>
              <Form.Check type="checkbox" label="Запомни ме?" />
            </Form.Group>
            <Form.Group className="row">
              <div className="col-6">
                <Button
                  className="btn btn-block"
                  variant="outline-primary"
                  type="btn-primary"
                >
                  Најави се
                </Button>
              </div>
              <div className="col-6">
                <Button
                  className="btn btn-block"
                  type="btn-secondary"
                  href="/signup"
                >
                  Регистрирај се!
                </Button>
              </div>
            </Form.Group>
          </Form>
        </div>
      </div>
    );
  }
}

export default Login;
