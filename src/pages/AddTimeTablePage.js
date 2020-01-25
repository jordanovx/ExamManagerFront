import React from "react";
import FileDrop from 'react-file-drop';
import "rc-time-picker/assets/index.css";
import {Col, Button} from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import xls from "../images/xls.png";
import csv from "../images/csv.png";
import {default as xlsx} from "../images/xls.png";
import unknown from "../images/unknown.png";

class AddTimeTablePage extends React.Component {
  constructor(props) {
      super(props);
      this.state = {file_extension: false};
      this.state = {warning_message: ""};
      this.state = {file_count: 0};
      this.state = {file_not_allowed: true};
      this.state = {file_name: ""};
      this.state = {file_size_limit: 10};
      this.state = {file_size: 0};
      // in MBytes
      this.state = {allowed_extensions: ['csv', 'xls', 'xlsx']};


  }

  getClassrooms = () => {
    fetch("http://localhost:8080/classrooms", {
      mode: "cors",

      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
        // 'Content-Type': 'application/x-www-form-urlencoded',
      }
    })
      .then(res => res.text())
      .then(
        result => {
          console.log(result);
          this.setState({ data: result });
        },

        error => {
          console.log(error);
        }
      );
  };

  isAllowedExtension = (extension) => {
        return this.state.allowed_extensions.filter((element) => {
            return element === extension;
        }).length>0;
  };

  handleDrop = (files, event) => {
      this.setState({file_count : files.length});
      let split_file = files[0].name.split(".");
      let extension = split_file[1];

      if(!this.isAllowedExtension(extension)) {
          this.setState({warning_message: "Екстензијата на фајлот не е дозволена! Дозволени се (.xls .xlsx .csv)"});
          this.setState({file_not_allowed: true});
      }
      else {
          this.setState({warning_message: "Фајлот е прикачен успешно."});
          this.setState({file_not_allowed: false});
      }

      this.setState({file_name : files[0].name});
      this.setState({file_extension : extension});
      this.setState({file_size: files[0].size});


  };

  componentDidMount = () => {
  };

  objectExtensionMap = (extension) => {
        let map = new Map();
        map.set("csv", csv);
        map.set("xls", xls);
        map.set("xlsx", xlsx);
        map.set("unknown", unknown);
        return (map.get(extension)===undefined) ? map.get("unknown") : map.get(extension) ;
  };
  getDefaultMessage = (limit) => {
    return <div><p> {"Прикачи фајл"} </p> <p> {"Лимит " + limit + " MB" }</p></div>
  };
  calculateFileSize = (filesize) => {
        // bits to Mbyte conversion
        let mbytes =  Math.round((filesize *  0.000001 )).toFixed(2) ;

        if(mbytes>=1)
            return mbytes+ " MB";
        else
            return "1 < MB";
  };

  render() {
      return (
      <div>
        <Breadcrumb className="troski">
          <Breadcrumb.Item href="/">Почетна</Breadcrumb.Item>
          <Breadcrumb.Item href="/addtimetable">Распоред</Breadcrumb.Item>
          <Breadcrumb.Item active>Додади</Breadcrumb.Item>
        </Breadcrumb>

        <div className="wrapper">
         <Col xs={6} className="col-md-offset-3">
            {(this.state.file_not_allowed && this.state.warning_message!==" ") ?

                <div className="alert alert-danger" role="alert"> {this.state.warning_message}</div>: ""}

            {(!this.state.file_not_allowed && this.state.file_count!==undefined) ?
                <div className="alert alert-success" role="alert">{ this.state.warning_message}</div>: ""}

         </Col>
            <div id="react-file-drop">
                <FileDrop onDrop={this.handleDrop} onDragOver={this.handleDragOver}>

                    {(!(this.state.file_count>0)) ? this.getDefaultMessage(10): <img src={this.objectExtensionMap(this.state.file_extension)} />}

                    {(!(this.state.file_count>0)) ? "" :
                        <div className="filename"> {this.state.file_name}</div>
                    }
                    { (this.state.file_size>0) ? this.calculateFileSize(this.state.file_size) : ""
                    }

                </FileDrop>
            </div>
            <Button variant={"primary"} className="submit-file" disabled> Продолжи </Button>
        </div>
      </div>
    );
  }
}

export default AddTimeTablePage;
