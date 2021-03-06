import React, { Component } from "react";

import { Link } from "react-router-dom";

class Dropdown extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: true,
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
      <div className="sidebar__menu" id="menu">
        <div className="sidebar__menu" onClick={this.showMenu}>
          <i className="fa fa-briefcase"> Stok</i>
        </div>

        {this.state.showMenu ? (
          <div className="sidebar__menu" id="menu">
            <div className="sidebar__link">
              <i className="fa fa-wrench"></i>
              <Link to="/depo">Depo</Link>
            </div>

            <div className="sidebar__link">
              <i className="fa fa-list"></i>
              <Link to="/kategori">Kategori</Link>
            </div>

            <div className="sidebar__link">
              <i className="fa fa-gift"></i>
              <Link to="/urun">Ürün</Link>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Dropdown;
