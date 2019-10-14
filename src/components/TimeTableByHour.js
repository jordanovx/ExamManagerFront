import React from "react";
import { Table } from "react-bootstrap";

class TimeTableByHour extends React.Component {
  render() {
    return (
      <div>
        <div className="">
          <Table responsive="lg" striped bordered hover></Table>
        </div>
      </div>
    );
  }
}

export default TimeTableByHour;
