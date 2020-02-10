import React from "react";
import {
  Inject,
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda
} from "@syncfusion/ej2-react-schedule";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import NavigationBar from "../components/NavigationBar";
class TimetablePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: "hour" };
  }
  selectChangeEvent(event) {
    console.log(event.target.value);
    this.setState({ selected: event.target.value });
  }
  getTimetable() {
    fetch("http://localhost:8080/timetables", {
      mode: "cors",
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
        // 'Content-Type': 'application/x-www-form-urlencoded',
      }
    })
      .then(res => res.json())
      .then(
        result => {
          console.log(result);
          this.setState({ data: Object.values(result) });
        },
        error => {
          console.log(error);
        }
      );
  }

  componentDidMount() {
    this.getTimetable();
  }
  render() {
    return (
      <div>
        <NavigationBar className="nav"> </NavigationBar>
        <Breadcrumb className="troski">
          <Breadcrumb.Item href="/">Почетна</Breadcrumb.Item>
          <Breadcrumb.Item href="/addsubjects">Распоред</Breadcrumb.Item>
          <Breadcrumb.Item active>Додади</Breadcrumb.Item>
        </Breadcrumb>
        <Row className="justify-content-md-center">
          <Col xs lg="11">
            <ScheduleComponent>
              <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
            </ScheduleComponent>
          </Col>
        </Row>
      </div>
    );
  }
}

export default TimetablePage;
