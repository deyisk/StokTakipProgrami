import React from "react";
import "./Urun.css";
import Chart from "../charts/Chart";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import Search from "../urun/Search";

const Urun = () => {
  return (
    <>
      <Sidebar activePage={"urun"} />
      <Navbar />
      <main>
        <div className="main__container" id="mainn">
          <div className="main__titles">
            <div className="main__greeting">
              <h4>ÜRÜN</h4>
            </div>
            <p>Ürün Bilgileri</p>
            <Search />
          </div>
          {/* <div className="main__cards">ürün</div> */}
        </div>
      </main>
    </>
  );
};

export default Urun;
