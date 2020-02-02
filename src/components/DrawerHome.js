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
              <li>Почетна</li>
              <li>Професори</li>
              <li>Простории</li>
              <li>Предмети</li>
              <li>Распоред</li>
              <li>Сесии</li>
            </ul>
          </Drawer>
        </div>
      </Fragment>
    );
  }
}

export default DrawerHome;
