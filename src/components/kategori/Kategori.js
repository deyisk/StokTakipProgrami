import React from "react";
import "./Kategori.css";
import Chart from "../charts/Chart";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import List1 from "./List1";
import Refresh from "../depo/refresh/Refresh";
// import Table from "../depo/Table";

const Kategori = () => {
  return (
    <>
      <Sidebar activePage={"kategori"} />
      <Navbar />
      <main>
        <div className="main__container" id="mainn">
          <div className="main__title">
            <div className="main__greeting">
              <h4>KATEGORİ</h4>
              <b>
                {" "}
                <p>Kategori Bilgileri</p>
              </b>
            </div>

            <hr />

            <Refresh />
            <hr />

            <List1 />

            {/* <Table/> */}
          </div>
          {/* <div className="main__cards">Kategori</div> */}
        </div>
      </main>
    </>
  );
};

export default Kategori;
