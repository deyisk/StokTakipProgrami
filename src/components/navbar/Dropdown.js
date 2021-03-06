import React, { useState } from "react";
import { Link } from "react-router-dom";

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
        <DropdownItem>
          {/* <Link to="/hesabım">Hesap</Link> */}
          <a>Hesabım</a>
        </DropdownItem>

        <DropdownItem>
          {/* <Link to="/çıkış">Çıkış</Link> */}
          <a>Çıkış</a>
        </DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
  );
};

export default Dropdown;
