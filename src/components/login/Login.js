import "./Login.css";
import React from "react";
import { Link } from "react-router-dom";

class Login extends React.Component {
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
                <div className="input-group mb-3" id="email">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i class="fa fa-user"></i>
                    </span>
                  </div>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="email"
                  />
                </div>
                <div className="input-group mb3" id="password">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      {" "}
                      <i class="fa fa-lock"></i>{" "}
                    </span>
                  </div>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="password"
                  />
                </div>

                <button
                  type="buttonn"
                  className="btn btn-secondary btn-block"
                  onClick={() => {
                    localStorage.setItem("user", true);
                    window.location.href = "/";
                  }}
                >
                  <Link to="/">Giriş Yap</Link>
                </button>

                <div className="message">
                  <div>
                    {" "}
                    <input type="checkbox" />
                    Beni Hatırla{" "}
                  </div>
                  <div>
                    <a href="#" input="value">
                      <Link to="/forgot">Parolanızı mı Unuttunuz?</Link>
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
