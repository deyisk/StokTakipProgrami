import React from "react";
import "./Urun.css";
import Chart from "../charts/Chart";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import { Container, Row, Col } from "react-bootstrap";
import Search from "../urun/Search";
import { isMobile, isMobileOnly } from "react-device-detect";
import "./Urun.css";

const Urun = () => {
  return (
    <>
      <Container fluid style={{ padding: 0, margin: 0 }}>
        <Row style={{ flexDirection: "row", height: "100%" }}>
          <Col xs={12} md={4} lg={2} style={{ padding: 0, margin: 0 }}>
            <Sidebar activePage={"urun"} />
          </Col>
          <Col style={{ padding: 0, margin: 0 }}>
            <Navbar />

            <main>
              <div className="main__container" id="mainn">
                <div className="main__titles">
                  <div className="main__greeting">
                    <h4>ÜRÜN</h4>
                  </div>
                  <p>Ürün Bilgileri</p>
                </div>
                <Search />
                {/* <div className="main__cards">ürün</div> */}
              </div>
            </main>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Urun;
