import React, { Component } from "react";
import Modal from "../depo/modal/Modal";

class List1 extends Component {
  constructor(props) {
    super(props);

    this.replaceModalItem = this.replaceModalItem.bind(this);
    this.saveModalDetails = this.saveModalDetails.bind(this);
    this.state = {
      requiredItem: 0,
      brochure: [
        {
          title: "Bilgisayar",
          msg: "Bilgisayar,Laptop,etc.",
          aciklama: "abc depo",
        },

        {
          title: "Hizmet",
          msg: "Hizmet Kategorisi",
          aciklama: "",
        },

        {
          title: "Hatay",
          msg: "Hatay",
          aciklama: "",
        },

        // {
        //   title: "ANKARA",
        //   msg: "ANKARA DEPO",
        //   aciklama: "ankara",
        //   islem: "islem",
        // },

        // {
        //   title: "İSTANBUL",
        //   msg: "İSTANBUL DEPO",
        //   aciklama: "bilgisayar",
        //   islem: "islem",
        // },
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
    const brochure = this.state.brochure.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.title}</td>
          <td>{item.msg}</td>
          <td>{item.aciklama}</td>
          <td>{item.islem}</td>

          <td>
            <button
              className="btn btn-primary"
              data-toggle="modal"
              data-target="#exampleModal"
              onClick={() => this.replaceModalItem(index)}
            >
              Düzenle
            </button>{" "}
            <button
              className="btn btn-danger"
              onClick={() => this.deleteItem(index)}
            >
              Kaldır
            </button>
          </td>
        </tr>
      );
    });

    const requiredItem = this.state.requiredItem;
    let modalData = this.state.brochure[requiredItem];
    return (
      <div>
        <table className="table table-striped">
          <tbody>{brochure}</tbody>
        </table>
        <Modal
          title={modalData.title}
          msg={modalData.msg}
          aciklama={modalData.aciklama}
          saveModalDetails={this.saveModalDetails}
          islem={modalData.islem}
        />
      </div>
    );
  }
}

export default List1;
