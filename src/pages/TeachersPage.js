import React from "react";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import { Table } from "react-bootstrap";

import Breadcrumb from "react-bootstrap/Breadcrumb";
class TeachersPage extends React.Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <Breadcrumb className="troski">
          <Breadcrumb.Item href="/">Почетна</Breadcrumb.Item>
          <Breadcrumb.Item href="/teachers">Професори</Breadcrumb.Item>
          <Breadcrumb.Item active>Преглед</Breadcrumb.Item>
        </Breadcrumb>
        <div className="wrapper">
          <div className="classroomsTable">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th></th>
                  <th>Име на професор</th>
                  <th>Презиме</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default TeachersPage;
