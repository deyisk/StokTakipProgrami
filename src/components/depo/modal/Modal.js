import React, { Component } from "react";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.handleSave = this.handleSave.bind(this);
    this.state = {
      title: "",
      msg: "",
      aciklama: "",
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      title: nextProps.title,
      msg: nextProps.msg,
      aciklama: nextProps.aciklama,
    });
  }

  titleHandler(e) {
    this.setState({ title: e.target.value });
  }

  msgHandler(e) {
    this.setState({ msg: e.target.value });
  }

  aciklamaHandler(e) {
    this.setState({ aciklama: e.target.value });
  }

  handleSave() {
    const item = this.state;
    this.props.saveModalDetails(item);
  }

  render() {
    return (
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Düzenle
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div className="modal-body">
              <p>
                <span className="modal-lable">Depo:</span>
                <input
                  value={this.state.title}
                  onChange={(e) => this.titleHandler(e)}
                />
              </p>
              <p>
                <span className="modal-lable">Adres:</span>
                <input
                  value={this.state.msg}
                  onChange={(e) => this.msgHandler(e)}
                />
              </p>

              <p>
                <span className="modal-lable">Aciklama:</span>
                <input
                  value={this.state.aciklama}
                  onChange={(e) => this.aciklamaHandler(e)}
                />
              </p>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Kapat
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
                onClick={() => {
                  this.handleSave();
                }}
              >
                Kaydet
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
