import React from "react";
import "./Kategori.css";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import List1 from "./List1";
import Refresh from "../depo/refresh/Refresh";
import { Container, Row, Col } from "react-bootstrap";

const Kategori = () => {
  return (
    <>
      <Container fluid style={{ padding: 0, margin: 0 }}>
        <Row style={{ flexDirection: "row", height: "100%" }}>
          <Col xs={12} md={4} lg={2} style={{ padding: 0, margin: 0 }}>
            <Sidebar activePage={"kategori"} />
          </Col>
          <Col style={{ padding: 0, margin: 0 }}>
            <Navbar />

            <main>
              <div className="main__container" id="mainn">
                <div className="main__title">
                  <div className="main__greeting">
                    <h4>KATEGORİ</h4>
                    <b>
                      <span className="duzenle">
                        <i className="fa fa-plus"></i>
                      </span>{" "}
                      <p>Kategori Bilgileri</p>
                    </b>
                  </div>
                  <hr />
                  <Refresh />

                  <List1 />
                </div>
              </div>
            </main>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Kategori;
