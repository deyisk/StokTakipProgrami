import React from "react";
import "./Stok.css";
import Chart from "../charts/Chart";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import List from "../depo/list/List";
import Refresh from "../depo/refresh/Refresh";

const Stok = () => {
  return (
    <>
      <Sidebar activePage={"stok"} />
      <Navbar />
      <main>
        <div className="main__container" id="mainn">
          <div className="main__title">
            <div className="main__greeting">
              <h2>STOK</h2>
            </div>

            {/* <Refresh />
            <List /> */}
          </div>
          {/* <div className="main__cards">stok s</div> */}
        </div>
      </main>
    </>
  );
};

export default Stok;
