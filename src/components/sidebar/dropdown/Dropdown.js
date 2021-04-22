import React, { Component } from "react";
import "./Dropdown.css";

class Dropdown extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false,
    };

    this.showMenu = this.showMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({
      showMenu: true,
    });
  }

  render() {
    return (
      <div>
        <div className="sidebar__menu">
          <div className="sidebar__menu" onClick={this.showMenu}>
            <i className="fa fa-briefcase"> Stok</i>
          </div>

          {this.state.showMenu ? (
            <div className="menu">
              <button> Menu item 1 </button>
              <button> Menu item 2 </button>
              <button> Menu item 3 </button>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Dropdown;
