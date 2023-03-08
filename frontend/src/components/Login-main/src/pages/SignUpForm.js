import React, { Component } from "react";
import { Link } from "react-router-dom";

class SignUpForm extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      name: "",
      hasAgreed: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let target = event.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    console.log("The form was submitted with the following data:");
    console.log(this.state);
  }

  render() {
    return (
      <div className="formCenter">
        <form onSubmit={this.handleSubmit} className="formFields">
          <div className="formField">
            <label className="formFieldLabel" htmlFor="name">
              Nome Completo
            </label>
            <input
              type="text"
              id="name"
              className="formFieldInput"
              placeholder="Digite o nome completo"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="password">
              Senha
            </label>
            <input
              type="password"
              id="password"
              className="formFieldInput"
              placeholder="Digite a senha"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="email">
              Endereço de e-mail
            </label>
            <input
              type="email"
              id="email"
              className="formFieldInput"
              placeholder="Adicione o seu email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>


          <div className="formField">
            <button className="formFieldButton">Entrar</button>{" "}
            <Link to="/sign-in" className="formFieldLink">
           
            </Link>
          </div>
        </form>
      </div>
    );
  }
}
export default SignUpForm;
