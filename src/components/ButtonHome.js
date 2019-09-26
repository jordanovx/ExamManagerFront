import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import {
  FaUserTie,
  FaRegCalendarPlus,
  FaWindowRestore,
  FaBook,
  FaUserFriends,
  FaHome,
  FaBookMedical,
  FaCalendarWeek,
  FaBookOpen,
  FaBookReader
} from "react-icons/fa";

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
                <FaHome size={70} /> <br />
                Додади просторија
              </Button>
            </div>
          </Link>
          <Link to="/addsubjects">
            <div className="kopce btn">
              <Button type="button" variant="info" block>
                <FaBookMedical size={70} /> <br />
                Додади Предмет
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
          <Link to="/addSession">
            <div className="kopce btn">
              <Button type="button" variant="info" block>
                <FaBookOpen size={70} /> <br />
                Додади Сесија
              </Button>
            </div>
          </Link>
        </div>
        <Link to="/teachers">
          <div className="kopce btn">
            <Button type="button" variant="info" block>
              <FaUserFriends size={70} /> <br />
              ПРОФЕСОРИ
            </Button>
          </div>
        </Link>
        <Link to="/classrooms">
          <div className="kopce btn">
            <Button type="button" variant="info" block>
              <FaWindowRestore size={70} /> <br />
              ПРОСТОРИИ
            </Button>
          </div>
        </Link>
        <Link to="/subjects">
          <div className="kopce btn">
            <Button type="button" variant="info" block>
              <FaBook size={70} /> <br />
              ПРЕДМЕТИ
            </Button>
          </div>
        </Link>
        <Link to="/TimeTable">
          <div className="kopce btn">
            <Button type="button" variant="info" block>
              <FaCalendarWeek size={70} /> <br />
              РАСПОРЕД
            </Button>
          </div>
        </Link>
        <Link to="/Session">
          <div className="kopce btn">
            <Button type="button" variant="info" block>
              <FaBookReader size={70} /> <br />
              СЕСИЈА
            </Button>
          </div>
        </Link>
      </div>
    );
  }
}

export default ButtonHome;
