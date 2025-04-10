import "./App.css";
import React, { Component } from "react";
import InputForm from "./components/InputForm.jsx";
import ToDoList from "./components/ToDoList.jsx";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    };

    this.handleAddTask = this.handleAddTask.bind(this);
    this.handleDeleteTask = this.handleDeleteTask.bind(this);
  }

  handleAddTask(task) {
    this.setState((prevState) => ({
      tasks: [...prevState.tasks, task],
    }));
  }

  handleDeleteTask(indexToRemove) {
    const updatedTasks = [...this.state.tasks];
    updatedTasks.splice(indexToRemove, 1);

    this.setState({ tasks: updatedTasks });
  }

  render() {
    return (
      <div>
        <InputForm onAddTask={this.handleAddTask} />
        <ToDoList tasks={this.state.tasks} onDelete={this.handleDeleteTask} />
      </div>
    );
  }
}
