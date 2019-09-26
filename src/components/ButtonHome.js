import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { FaUserTie, FaRegCalendarPlus, FaWindowRestore } from "react-icons/fa";

class ButtonHome extends React.Component {
  render() {
    return (
      <div>
        <div className="content">
          <Link to="/addteachers">
            <div className="kopce btn">
              <Button type="button" variant="info" block>
                <FaUserTie size={70} /> <br />
                Додади професор
              </Button>
            </div>
          </Link>

          <Link to="/addclassroom">
            <div className="kopce btn">
              <Button type="button" variant="info" block>
                <FaWindowRestore size={70} /> <br />
                Додади просторија
              </Button>
            </div>
          </Link>
          <Link to="/addTimeTable">
            <div className="kopce btn">
              <Button type="button" variant="info" block>
                <FaRegCalendarPlus size={70} /> <br />
                Додади Распоред
              </Button>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default ButtonHome;
