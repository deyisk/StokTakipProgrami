import React, { Component } from "react";
import Modal2 from "../kategori/Modal2";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";

class List1 extends Component {
  constructor(props) {
    super(props);

    this.saveModalDetails = this.saveModalDetails.bind(this);
    this.state = {
      requiredItem: 0,
      brochure: [],
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

  componentDidMount = async () => {
    const response = await axios.get("http://localhost:3004/brochure");
  };

  handleFormSubmit = async () => {
    await axios.get("http://localhost:3004/brochure");
  };

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
              <td>{item.adres}</td>

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
        <div className="table-responsive">
          <p>Hiç kategori Bulunamadı</p>
        </div>
      );

    return (
      <div>
        <div className="table-responsive">
          <table className="table table-striped">
            <tbody>{brochure}</tbody>
          </table>

          {this.state.brochure.length > 0 && (
            <Modal2
              title={modalData.title}
              msg={modalData.msg}
              aciklama={modalData.aciklama}
              saveModalDetails={this.saveModalDetails}
              islem={modalData.islem}
              adres={modalData.adres}
            />
          )}
        </div>
      </div>
    );
  }
}

export default List1;
