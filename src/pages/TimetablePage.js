import React from "react";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import { Form } from "react-bootstrap";
import TimeTableByHour from "../components/TimeTableByHour";
import TimeTableByDate from "../components/TimeTableByDate";

class TimetablePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: "hour" };
  }
  selectChangeEvent(event) {
    console.log(event.target.value);
    this.setState({ selected: event.target.value });
  }
  render() {
    return (
      <div>
        <NavigationBar />
        <div className="wrapper">
          <div className="classroomsTable">
            <Form.Group controlId="formGridState" className="timetable-select">
              <Form.Label>Прикажи по</Form.Label>
              <Form.Control
                as="select"
                onChange={this.selectChangeEvent.bind(this)}
              >
                <option value="hour">Час</option>
                <option value="date">Датум</option>
              </Form.Control>
            </Form.Group>
            {this.state.selected === "hour" ? (
              <TimeTableByHour />
            ) : (
              <TimeTableByDate />
            )}
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default TimetablePage;
