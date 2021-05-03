import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Dropdown.css";

import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const Dropdown = (props) => {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  return (
    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret></DropdownToggle>

      <DropdownMenu>
        <div className="item">
          <DropdownItem>
            <Link to="/hesabım">Hesap</Link>
          </DropdownItem>

          <DropdownItem>
            <Link to="/çıkış">Çıkış</Link>
          </DropdownItem>
        </div>
      </DropdownMenu>
    </ButtonDropdown>
  );
};

export default Dropdown;
