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
    );
  }
}

export default TimeTableByDate;
