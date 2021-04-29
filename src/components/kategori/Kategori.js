import React from "react";
import "./Kategori.css";
import Chart from "../charts/Chart";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import List1 from "./List1";
import Refresh from "../depo/refresh/Refresh";
import { Container, Row, Col } from "react-bootstrap";

// import Table from "../depo/Table";

const Kategori = () => {
  return (
    <>
      <Container fluid style={{ padding: 0 }}>
        <Row style={{ flexDirection: "row", height: "100%" }}>
          <Col xs={3}>
            <Sidebar activePage={"kategori"} />
            <List1 />
            <Refresh />
          </Col>
          <Col>
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

                  <hr />

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

export default Kategori;
