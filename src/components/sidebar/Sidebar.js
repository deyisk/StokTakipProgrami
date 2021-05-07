import "./Sidebar.css";
import { Link } from "react-router-dom";
import Dropdown from "./dropdown/Dropdown";
import { isMobile, isMobileOnly } from "react-device-detect";
import React from "react";
function Sidebar({ activePage }) {
  console.log("ismobile", isMobile);

  const [sidebarMenu, setSidebarMenu] = React.useState(!isMobile);

  return (
    <div className="sidebar-responsive" id="sidebar">
      <div className="sidebar__title">
        <h2>STOK TAKİBİ</h2>

        {isMobile && <p onClick={() => setSidebarMenu(!sidebarMenu)}>Menü</p>}
      </div>

      <div
        className="sidebar__menu"
        id="menu"
        style={{ display: sidebarMenu ? "block" : "none" }}
      >
        <div
          className={`sidebar__link ${
            activePage === "home" ? "active_menu_link" : ""
          }`}
        >
          <i className="fa fa-home"></i>
          <Link to="/main">Anasayfa</Link>
        </div>

        <div className="sidebar__link">
          <Dropdown />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
