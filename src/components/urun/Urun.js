import React from "react";
import "./Urun.css";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import { Container, Row, Col } from "react-bootstrap";
import { isMobile, isMobileOnly } from "react-device-detect";
import "./Urun.css";
import Modal3 from "../urun/Modal3";
import List3 from "../urun/List3";

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
                <div className="main__title">
                  <div className="main__greeting">
                    <h4>ÜRÜN</h4>
                    <b>
                      {" "}
                      <p>Ürün Bilgileri</p>
                    </b>
                  </div>
                  <hr />
                  <List3 />

                  {/* <Table/> */}
                </div>
                {/* <div className="main__cards">Kategori</div> */}
              </div>
            </main>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Urun;
