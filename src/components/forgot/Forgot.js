import "./Forgot.css";
import React from "react";

class Forgot extends React.Component {
  render() {
    return (
      <div className="log">
        <div className="loginn">
          <div className="form-box">
            <div className="header-form">
              <h4 className="text-primary text-center">
                <i
                  className="fa fa-user-circle"
                  style={{ fontSize: "110px" }}
                ></i>
              </h4>

              <div className="image"></div>
            </div>

            <div className="body-form">
              <form>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i class="fa fa-user"></i>
                    </span>
                  </div>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="E-mail"
                  />
                </div>
                <div className="input-group mb3">
                  <div className="input-group-prepend"></div>
                </div>

                <button
                  type="buttonn"
                  className="btn btn-secondary btn-block"
                  onClick={() => {
                    localStorage.setItem("user", true);
                    window.location.href = "/";
                  }}
                >
                  E-POSTA GÖNDER
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Forgot;
