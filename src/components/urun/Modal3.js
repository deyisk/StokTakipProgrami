import React, { Component } from "react";

class Modal3 extends Component {
  constructor(props) {
    super(props);
    this.handleSave = this.handleSave.bind(this);
    this.state = {
      urun: "",
      aciklama: "",
      depo: "",
      kategori: "",
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      urun: nextProps.urun,
      aciklama: nextProps.aciklama,
    });
  }

  urunHandler(e) {
    this.setState({ urun: e.target.value });
  }

  aciklamaHandler(e) {
    this.setState({ aciklama: e.target.value });
  }

  depoHandler(e) {
    this.setState({ depo: e.target.value });
  }
  kategoriHandler(e) {
    this.setState({ kategori: e.target.value });
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
                <span className="modal-lable">Ürün:</span>
                <input
                  value={this.state.urun}
                  onChange={(e) => this.urunHandler(e)}
                />
              </p>

              <p>
                <span className="modal-lable">Aciklama:</span>
                <input
                  value={this.state.aciklama}
                  onChange={(e) => this.aciklamaHandler(e)}
                />
              </p>

              <p>
                <span className="modal-lable">Depo:</span>

                <input
                  value={this.state.depo}
                  onChange={(e) => this.depoHandler(e)}
                />
              </p>

              <p>
                <span className="modal-lable">Kategori:</span>
                <input
                  value={this.state.kategori}
                  onChange={(e) => this.kategoriHandler(e)}
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

export default Modal3;
