import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Row, Col } from "react-bootstrap";
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
        <Container>
        <Row>
          <Col xs={10}>
      <div>
        <div className="container mt-5">
          <div className="btn-wrapper ">
            <div className="btn btnStyle">
              <Link to="/addteachers">
                <div className="btnHome">
                  <Button type="button" variant="info" block>
                    <FaUserTie size={70} /> <br />
                    Додади професор
                  </Button>
                </div>
              </Link>
            </div>

            <div className="btn btnStyle">
              <Link to="/addclassroom">
                <div className="btnHome">
                  <Button type="button" variant="info" block>
                    <FaHome size={70} /> <br />
                    Додади просторија
                  </Button>
                </div>
              </Link>
            </div>
            <div className="btn btnStyle">
              <Link to="/addsubjects">
                <div className="btnHome">
                  <Button type="button" variant="info" block>
                    <FaBookMedical size={70} /> <br />
                    Додади Предмет
                  </Button>
                </div>
              </Link>
            </div>
            <div className="btn btnStyle">
              <Link to="/addTimeTable">
                <div className="btnHome">
                  <Button type="button" variant="info" block>
                    <FaRegCalendarPlus size={70} /> <br />
                    Додади Распоред
                  </Button>
                </div>
              </Link>
            </div>
            <div className="btn btnStyle">
              <Link to="/addSession">
                <div className=" btnHome">
                  <Button type="button" variant="info" block>
                    <FaBookOpen size={70} /> <br />
                    Додади Сесија
                  </Button>
                </div>
              </Link>
            </div>
          </div>
          <div className="btn-wrapper ">
            <div className="btn btnStyle">
              <Link to="/teachers">
                <div className="btnHome">
                  <Button type="button" variant="info" block>
                    <FaUserFriends size={70} /> <br />
                    ПРОФЕСОРИ
                  </Button>
                </div>
              </Link>
            </div>

            <div className="btn btnStyle">
              <Link to="/classrooms">
                <div className="btnHome">
                  <Button type="button" variant="info" block>
                    <FaWindowRestore size={70} /> <br />
                    ПРОСТОРИИ
                  </Button>
                </div>
              </Link>
            </div>

            <div className="btn btnStyle">
              <Link to="/subjects">
                <div className="btnHome">
                  <Button type="button" variant="info" block>
                    <FaBook size={70} /> <br />
                    ПРЕДМЕТИ
                  </Button>
                </div>
              </Link>
            </div>

            <div className="btn btnStyle">
              <Link to="/TimeTable">
                <div className="btnHome">
                  <Button type="button" variant="info" block>
                    <FaCalendarWeek size={70} /> <br />
                    РАСПОРЕД
                  </Button>
                </div>
              </Link>
            </div>

            <div className="btn btnStyle">
              <Link to="/Session">
                <div className="btnHome">
                  <Button type="button" variant="info" block>
                    <FaBookReader size={70} /> <br />
                    СЕСИЈА
                  </Button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
          </Col>
        </Row>
        </Container>
    );
  }
}

export default ButtonHome;
