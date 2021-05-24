import React, { Component } from "react";
import Modal from "../modal/Modal";
import axios from "axios";

class List extends Component {
  constructor(props) {
    super(props);

    this.replaceModalItem = this.replaceModalItem.bind(this);
    this.saveModalDetails = this.saveModalDetails.bind(this);
    this.state = {
      requiredItem: 0,
      brochure: [
        {
          title: "Hizmet Deposu",
          msg: "İstanbul",
          aciklama: "İstanbul Depo",
          islem: "işlem",
        },
        {
          title: "Bilgisayar Donanım",
          msg: "İstanbul",
          aciklama: "İstanbul Depo",
          islem: "",
        },

        {
          title: "Hatay",
          msg: "Hatay",
          aciklama: "hatay",
          islem: "",
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
              <td>{item.title}</td>
              <td>{item.msg}</td>
              <td>{item.aciklama}</td>
              <td>{item.islem}</td>

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
          <p>Hiç Depo Bulunamadı</p>
        </div>
      );

    return (
      <div className="table-responsive">
        <table className="table table-striped">
          <tbody>{brochure}</tbody>
        </table>
        {this.state.brochure.length > 0 && (
          <Modal
            title={modalData.title}
            msg={modalData.msg}
            aciklama={modalData.aciklama}
            islem={modalData.islem}
            saveModalDetails={this.saveModalDetails}
          />
        )}
      </div>
    );
  }
}

export default List;
