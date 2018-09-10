import React, { Component } from "react";
import SubmitButton from "./SubmitButton/SubmitButton";
import Input from "./Input/Input";
import "./Form.scss";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        name: "",
        email: "",
        password: ""
      }
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { user } = this.state;
    console.log(user);
  }

  handleOnChange(e) {
    const { user } = this.state;
    const property = e.target.id;
    this.setState({ user: { ...user, [property]: e.target.value } });
  }

  render() {
    return (
      <form className="sing-up__container" onSubmit={this.handleSubmit}>
        <Input
          placeholder="Kazimierz Wichura"
          change={this.handleOnChange}
          name="name"
          icon="user"
          required
        />
        <Input
          type="email"
          placeholder="drone@globex.com"
          change={this.handleOnChange}
          name="at"
          icon="at"
          required
        />
        <Input
          type="password"
          placeholder="password"
          change={this.handleOnChange}
          name="password"
          icon="lock"
          required
        />

        <SubmitButton text="LOG IN" />
      </form>
    );
  }
}

export default Form;
