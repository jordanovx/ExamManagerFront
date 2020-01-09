import React from "react";
import { Form } from "react-bootstrap";
import TimeTableByHour from "../components/TimeTableByHour";
import TimeTableByDate from "../components/TimeTableByDate";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
        <Row className="justify-content-md-center">
          <Col xs lg="2">
            <div className="wrapper1">
              <div className="classroomsTable">
                <Form.Group
                  controlId="formGridState"
                  className="timetable-select"
                >
                  <Form.Label>Прикажи по</Form.Label>
                  <Form.Control
                    as="select"
                    onChange={this.selectChangeEvent.bind(this)}
                  >
                    <option value="hour">Час</option>
                    <option value="date">Датум</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group
                  controlId="formGridState"
                  className="timetable-select"
                >
                  <Form.Label>Одбери сесија</Form.Label>
                  <Form.Control
                    as="select"
                    onChange={this.selectChangeEvent.bind(this)}
                  >
                    <option value="eden">Јунска 2018/2019</option>
                    <option value="dva">Септемвриска 2018/2019</option>
                  </Form.Control>
                </Form.Group>
                {this.state.selected === "hour" ? (
                  <TimeTableByHour />
                ) : (
                  <TimeTableByDate />
                )}
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default TimetablePage;
