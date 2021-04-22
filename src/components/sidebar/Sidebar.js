import "./Sidebar.css";
import { Link } from "react-router-dom";
import Dropdown from "./dropdown/Dropdown";

function Sidebar({ activePage }) {
  return (
    <div className="sidebar-responsive" id="sidebar">
      <div className="sidebar__title">
        <h2>STOK TAKİBİ</h2>
      </div>

      <div className="sidebar__menu" id="menu">
        <div
          className={`sidebar__link ${
            activePage === "home" ? "active_menu_link" : ""
          }`}
        >
          <i className="fa fa-home"></i>
          <Link to="/">Anasayfa</Link>
        </div>

        <div className="sidebar__link">
          <Dropdown />
        </div>

        {/* <div
          className={`sidebar__link ${
            activePage === "depo" ? "active_menu_link" : ""
          }`}
        >
          <i className="fa fa-wrench"></i>
          <Link to="/depo">Depo</Link>
        </div> */}
      </div>

      {/* <div
        className={`sidebar__link ${
          activePage === "kategori" ? "active_menu_link" : ""
        }`}
      >
        <i className="fa fa-list"></i>
        <Link to="/kategori">Kategori</Link>
      </div> */}

      {/* <div
        className={`sidebar__link ${
          activePage === "urun" ? "active_menu_link" : ""
        }`}
      >
        <i className="fa fa-gift"></i>
        <Link to="/urun">Ürün</Link>
      </div> */}
    </div>
  );
}

export default Sidebar;
