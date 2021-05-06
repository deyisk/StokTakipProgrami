import React from "react";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
// import Table from "../depo/Table";
import List from "../depo/list/List";
import Modal from "../depo/modal/Modal";
import Refresh from "../depo/refresh/Refresh";
import { Container, Row, Col } from "react-bootstrap";
import "jquery/dist/jquery.min.js";
import "popper.js/dist/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";

function Depo() {
  return (
    <>
      <Container fluid style={{ padding: 0, margin: 0 }}>
        <Row style={{ flexDirection: "row", height: "100%" }}>
          <Col xs={12} md={4} lg={2} style={{ padding: 0, margin: 0 }}>
            <Sidebar activePage={"depo"} />
          </Col>
          <Col style={{ padding: 0, margin: 0 }}>
            <Navbar />

            <main>
              <div className="main__container" id="mainn">
                <div className="main__title">
                  <div className="main__greeting">
                    <h4>DEPO</h4>
                    <b>
                      {" "}
                      <span className="duzenle">
                        <i className="fa fa-plus"></i>
                      </span>{" "}
                      <p>Depo Bilgileri</p>
                      <hr />
                    </b>
                    <Refresh />

                    <List />
                    <Modal />
                    <hr />
                  </div>
                </div>
                {/* <div className="main__cards">Depo</div> */}
              </div>
            </main>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Depo;
