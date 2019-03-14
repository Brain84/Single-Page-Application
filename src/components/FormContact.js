import React, { Component } from 'react';
import '../styles/FormContact.scss';

class FormContact extends Component {

  state = {
    valueName: "",
    valueEmail: "",
    valueText: "",

    errors: {
      email: false,
      text: false
    }
  }

  errorMessage = {
    email_incorrect: "Please enter your email",
    text_incorrect: "Please enter your message"
  }

  handleSubmit = e => {
    e.preventDefault()

    const validation = this.formValidation();
    if (validation.correct) {
      this.setState({
        valueName: "",
        valueEmail: "",
        valueText: "",

        errors: {
          email: false,
          text: false
        }
      })
    } else {
      this.setState({
        errors: {
          email: !validation.email,
          text: !validation.text
        }
      })
    }
  }

  formValidation = () => {
    let email = false;
    let text = false;
    let correct = false;

    if (this.state.valueEmail !== '') {
      email = true
    }
    if (this.state.valueText !== '') {
      text = true
    }
    if (email && text) {
      correct = true
    }
    return ({
      email,
      text,
      correct
    })
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <form className="form__contact" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Your name"
          name="valueName"
          value={this.state.valueName}
          onChange={this.handleChange}
        />
        {this.state.errors.email && <span className="contact__errorEmail">{this.errorMessage.email_incorrect}</span>}
        <input
          type="text"
          placeholder="Your email"
          name="valueEmail"
          value={this.state.valueEmail}
          onChange={this.handleChange}
        />
        {this.state.errors.text && <span className="contact__errorText">{this.errorMessage.text_incorrect}</span>}
        <textarea placeholder="Enter your message" name="valueText" value={this.state.valueText} onChange={this.handleChange}></textarea>
        <button className="btn__form">Send</button>
      </form>
    );
  }
}

export default FormContact;