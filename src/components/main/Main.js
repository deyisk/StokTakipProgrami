import React from "react";
import "./Main.css";
import Chart from "../charts/Chart";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
      <Sidebar activePage={"home"} />
      <Navbar />
      <main>
        <div className="main__container" id="mainn">
          <div className="main__title">
            <div className="main__greeting">
              <h2>ANASAYFA</h2>
            </div>
          </div>
          <div className="main__cards">
            <div className="card1">
              <i className="fa fa-user-o fa-2x text1"></i>
              <div className="card_inner">
                <Link to="/">KULLANICILAR</Link>

                <span className="font-bold text-title">5</span>
              </div>
            </div>

            <div className="card2">
              <i className="fa fa-list fa-2x text1"></i>
              <div className="card_inner">
                <Link to="/depo">DEPOLAR</Link>

                <span className="font-bold text-title">5</span>
              </div>
            </div>

            <div className="card3">
              <i className="fa fa-list fa-2x text1 "></i>
              <div className="card_inner">
                <Link to="/kategori">KATEGORİLER</Link>

                <span className="font-bold text-title">5</span>
              </div>
            </div>

            <div className="card4">
              <i className="fa fa-list fa-2x text1"></i>
              <div className="card_inner">
                <Link to="/urun">ÜRÜNLER</Link>

                <span className="font-bold text-title">5</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;
