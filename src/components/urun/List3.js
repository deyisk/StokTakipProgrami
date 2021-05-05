import React, { Component } from "react";
import Modal3 from "../urun/Modal3";
import { Container, Row, Col } from "react-bootstrap";
import Select from "react-select";

class List3 extends Component {
  constructor(props) {
    super(props);

    this.replaceModalItem = this.replaceModalItem.bind(this);
    this.saveModalDetails = this.saveModalDetails.bind(this);
    this.state = {
      requiredItem: 0,
      brochure: [
        {
          urun: "Bilgisayar",
          aciklama: "acşklama",
          depo: "depo",
          kategori: "kategori",
        },
      ],
    };
  }

  replaceModalItem(index) {
    this.setState({
      requiredItem: index,
    });
  }

  saveModalDetails(item) {
    const requiredItem = this.state.requiredItem;
    let tempbrochure = this.state.brochure;
    tempbrochure[requiredItem] = item;
    this.setState({ brochure: tempbrochure });
  }

  deleteItem(index) {
    let tempBrochure = this.state.brochure;
    tempBrochure.splice(index, 1);
    this.setState({ brochure: tempBrochure });
  }

  render() {
    const requiredItem = this.state.requiredItem;
    let modalData = this.state.brochure[requiredItem];
    const brochure =
      this.state.brochure.length > 0 ? (
        this.state.brochure.map((item, index) => {
          return (
            <tr key={index}>
              <td>{item.urun}</td>

              <td>{item.aciklama}</td>
              <td>{item.depo}</td>
              <td>{item.kategori}</td>

              <td>
                <i
                  className="fa fa-pencil"
                  data-toggle="modal"
                  data-target="#exampleModal"
                  onClick={() => this.replaceModalItem(index)}
                ></i>{" "}
                <i
                  className="fa fa-trash"
                  onClick={() => this.deleteItem(index)}
                ></i>
              </td>
            </tr>
          );
        })
      ) : (
        <div>
          <p>Hiç Ürün Bulunamadı</p>
        </div>
      );

    return (
      <div className="table-responsive">
        <table className="table table-striped">
          <tbody>{brochure}</tbody>
        </table>

        {this.state.brochure.length > 0 && (
          <Modal3
            urun={modalData.urun}
            aciklama={modalData.aciklama}
            depo={modalData.depo}
            saveModalDetails={this.saveModalDetails}
            kategori={modalData.kategori}
          />
        )}
      </div>
    );
  }
}

export default List3;
