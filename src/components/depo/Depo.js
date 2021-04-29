import React from "react";
import Chart from "../charts/Chart";
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

// Style

function Depo() {
  return (
    <>
      <Container fluid style={{ padding: 0 }}>
        <Row style={{ flexDirection: "row", height: "100%" }}>
          <Col xs={3}>
            <Sidebar activePage={"depo"} />
          </Col>

          <Col>
            {/* <Depo activeTable={"depo"} /> */}

            <Navbar />

            <main>
              <div className="main__container" id="mainn">
                <div className="main__title">
                  <div className="main__greeting">
                    <h4>DEPO</h4>
                    <b>
                      {" "}
                      <p>Depo Bilgileri</p>
                      <hr />
                    </b>
                    <Refresh />
                    <hr />
                    <List />
                    <Modal />
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
