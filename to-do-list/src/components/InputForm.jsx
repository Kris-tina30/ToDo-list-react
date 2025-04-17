import React, { Component } from "react";
import "../App.css";

export default class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "", tasks: [], description: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleDescriptionChange(event) {
    this.setState({ description: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    const newTask = {
      title: this.state.value,
      description: this.state.description,
    };

    this.props.onAddTask(newTask);

    this.setState({ value: "", description: "" });
  }
  render() {
    return (
      <div>
        <h2>New Task:</h2>
        <form onSubmit={this.handleSubmit} className="form">
          <input
            className="input"
            type="text"
            placeholder="Your task"
            required
            value={this.state.value}
            onChange={this.handleChange}
          />
          <textarea
            className="input"
            type="text"
            placeholder="Describe it"
            required
            value={this.state.description}
            onChange={this.handleDescriptionChange}
          />
          <button className="button" type="submit">
            Add
          </button>
        </form>
      </div>
    );
  }
}
