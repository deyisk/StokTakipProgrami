import React, { Component } from "react";
import Modal3 from "../urun/Modal3";
import { Container, Row, Col } from "react-bootstrap";
import Select from "react-select";
import axios from "axios";

class List3 extends Component {
  constructor(props) {
    super(props);

    this.replaceModalItem = this.replaceModalItem.bind(this);
    this.saveModalDetails = this.saveModalDetails.bind(this);
    this.state = {
      requiredItem: 0,
      urunler: [],
    };
  }

  replaceModalItem(index) {
    this.setState({
      requiredItem: index,
    });
  }

  saveModalDetails(item) {
    const requiredItem = this.state.requiredItem;
    let tempurunler = this.state.urunler;
    tempurunler[requiredItem] = item;
    this.setState({ urunler: tempurunler });
  }

  deleteItem(index) {
    let tempUrunler = this.state.urunler;
    tempUrunler.splice(index, 1);
    this.setState({ urunler: tempUrunler });
  }

  componentDidMount = async () => {
    await axios.get("http://localhost:3002/urunler");
  };

  handleFormSubmit = async () => {
    await axios.get("http://localhost:3002/urunler");
  };

  render() {
    const requiredItem = this.state.requiredItem;
    let modalData = this.state.urunler[requiredItem];
    const urunler =
      this.state.urunler.length > 0 ? (
        this.state.urunler.map((item, index) => {
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
          <tbody>{urunler}</tbody>
        </table>

        {this.state.urunler.length > 0 && (
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
