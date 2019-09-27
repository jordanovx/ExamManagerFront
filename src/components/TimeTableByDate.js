import React from "react";
import { Table } from "react-bootstrap";

class TimeTableByDate extends React.Component {
  render() {
    return (
      <div>
        <div className="wrapper">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th></th>
                <th>Датум</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default TimeTableByDate;
