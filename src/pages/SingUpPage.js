import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class SignUpPage extends React.Component {
  render() {
    return (
      <div>
        <div className="loginWrapper">
          <Form>
            <Form.Group controlId="formGroupIme">
              <Form.Label>Име</Form.Label>
              <Form.Control type="text" placeholder="Внеси име" />
              <Form.Group controlId="formGroupPrezime">
                <Form.Label>Презиме</Form.Label>
                <Form.Control type="text" placeholder="Внеси презиме" />
              </Form.Group>
              <Form.Group controlId="formGroupEmail">
                <Form.Label>E-mail Адреса</Form.Label>
                <Form.Control type="email" placeholder="Внеси E-mail" />
              </Form.Group>
              <Form.Group controlId="formGroupPassword">
                <Form.Label>Лозинка</Form.Label>
                <Form.Control type="password" placeholder="Внеси лозинка" />
              </Form.Group>
              <Form.Control type="password" placeholder="Потврди лозинка" />
            </Form.Group>
            <Form.Group>
              <Button type="btn-primary" className="btn btn-block btnLogin">
                Регистрација
              </Button>
            </Form.Group>
          </Form>
        </div>
      </div>
    );
  }
}

export default SignUpPage;
