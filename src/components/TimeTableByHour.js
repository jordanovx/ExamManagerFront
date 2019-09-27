import React from "react";
import { Table } from "react-bootstrap";

class TimeTableByHour extends React.Component {
  render() {
    return (
      <div>
        <div className="wrapper">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th></th>
                <th>08:00</th>
                <th>09:00</th>
                <th>10:00</th>
                <th>11:00</th>
                <th>12:00</th>
                <th>13:00</th>
                <th>14:00</th>
                <th>15:00</th>
                <th>16:00</th>
                <th>17:00</th>

              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Електронска и Мобилна Трговија</td>
                <td>Електронска и Мобилна Трговија</td>
                <td>Електронска и Мобилна Трговија</td>
                <td>Електронска и Мобилна Трговија</td>
                <td>Електронска и Мобилна Трговија</td>
                <td>Електронска и Мобилна Трговија</td>
                <td>Електронска и Мобилна Трговија</td>
                <td>Електронска и Мобилна Трговија</td>
                <td>Електронска и Мобилна Трговија</td>
                <td>Електронска и Мобилна Трговија</td>

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

export default TimeTableByHour;
