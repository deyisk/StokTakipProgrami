import "./Login.css";
import React, {
  createContext,
  useReducer,
  useEffect,
  useState,
  Component,
} from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import axios from "axios";

const reducer = (state, action) => {};

class Login extends React.Component {
  state = {
    users: [],
    dispatchEvent: (action) => {
      this.setState((state) => reducer(state, action));
    },
  };

  componentDidMount = async () => {
    const rememberMe = localStorage.getItem("rememberMe") === "true";
    const email = rememberMe ? localStorage.getItem("email") : "";
    const pwd = rememberMe ? localStorage.getItem("pwd") : "";
    this.setState({ email, rememberMe, pwd });
    const response = await axios.get("http://localhost:3002/users");
    console.log(response);
    // this.setState({
    //   users: response.data,
    // });
  };

  handleChange = (e) => {
    const input = e.target;
    const value = input.type === "checkbox" ? input.checked : input.value;
    this.setState({ [input.name]: value });
  };

  handleFormSubmit = () => {
    const { email, rememberMe, pwd } = this.state;
    localStorage.setItem("rememberMe", rememberMe);
    localStorage.setItem("email", rememberMe ? email : "");
    localStorage.setItem("pwd", rememberMe ? pwd : "");
  };

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
              <form onSubmit={this.handleFormSubmit}>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i class="fa fa-user"></i>
                    </span>
                  </div>

                  <input
                    type="text"
                    name="email"
                    placeholder="email"
                    className="form-control"
                    value={this.state.email}
                    onChange={this.handleChange}
                    required
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
                    name="pwd"
                    type="text"
                    className="form-control"
                    placeholder="Şifre"
                    onChange={this.handleChange}
                    value={this.state.pwd}
                    required
                  />
                </div>
                <label>
                  <input
                    name="rememberMe"
                    type="checkbox"
                    checked={this.state.rememberMe}
                    onChange={this.handleChange}
                  />{" "}
                  {""}Beni Hatırla
                </label>
                <button
                  type="submit"
                  id="button1"
                  className="btn btn-secondary btn-block"
                >
                  Giriş
                </button>
                <div className="message">
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
