import React, { Fragment } from "react";
import Drawer from "react-motion-drawer";

import { FaBars } from "react-icons/fa";

class DrawerHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leftSidebarOpen: false,
      rightSidebarOpen: false
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(isLeft) {
    if (isLeft && !this.state.rightSidebarOpen) {
      this.setState({ leftSidebarOpen: !this.state.leftSidebarOpen });
    } else if (!isLeft && !this.state.leftSidebarOpen) {
      this.setState({ rightSidebarOpen: !this.state.rightSidebarOpen });
    }
  }
  render() {
    return (
      <Fragment>
        <header className="burger">
          <FaBars
            length="10x"
            onClick={() => this.onSetSidebarOpen(true)}
            style={{
              float: "left",
              marginTop: "-20px",
              marginLeft: "10px",
              color: "grey"
            }}
          />
        </header>
        <div className="Navbar">
          <Drawer
            openDrawerOffset={0.5}
            open={this.state.leftSidebarOpen}
            onChange={sidebarOpen =>
              this.setState({ leftSidebarOpen: sidebarOpen })
            }
          >
            <ul className="menu">
              <li>
                <a href="/"> Почетна </a>
              </li>
              <li>
                <a href="/teachers"> Професори </a>
                <ol>
                  <li>
                    <a href="/addteachers">Додади +</a>
                  </li>
                </ol>
              </li>
              <li>
                <a href="/classrooms"> Простории</a>
                <ol>
                  <li>
                    <a href="/addclassroom">Додади +</a>{" "}
                  </li>
                </ol>
              </li>
              <li>
                <a href="/subjects">Предмети</a>
                <ol>
                  <li>
                    <a href="/addsubjects">Додади +</a>
                  </li>
                </ol>
              </li>
              <li>
                <a href="/TimeTable">Распоред</a>
                <ol>
                  <li>
                    <a href="/addTimeTable">Додади +</a>
                  </li>
                </ol>
              </li>
              <li>
                <a href="/Session">Сесии</a>
                <ol>
                  <li>
                    <a href="/addSession">Додади +</a>
                  </li>
                </ol>
              </li>
            </ul>
          </Drawer>
        </div>
      </Fragment>
    );
  }
}

export default DrawerHome;
