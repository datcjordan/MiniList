import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Points points= "0" />
        <Slogan title="A minimal to do list." />
        <TodoList />
      </div>
    );
  }
}

const Slogan = (props) => {
  return(
    <div className="slogan">
      <h1>{props.title}</h1>
    </div>
  );
}

const Points = (props) => {
  return (
    <div className="points">
      {props.points}
    </div>
  )
}

class InputBox extends Component {

  constructor(props) {
    super(props);

    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      inputValue: "",
    }
  }

  handleTextChange(event) {
    console.log(event.target.value);
    this.setState({ inputValue: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.inputValue);
    this.setState({ inputValue: ""});
  }

  render() {
    return(
      <form onSubmit={ this.handleSubmit } >
        <input type="text"
        placeholder={ this.props.placeholder }
        value={ this.state.inputValue }
        onChange={ this.handleTextChange }
        />
      </form>
    );
  }
}

class TodoList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      titles: [],
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(value) {
    console.log(this.state.titles);
    const newTitles = [...this.state.titles, value];
    this.setState({titles: newTitles});
  }

  render() {

    let todos = [];

    for (var i = 1; i <= 10; i++) {
      todos.push(<TodoItem key={`${i}`} num={`${i}`} title = {this.state.titles[i - 1] ? this.state.titles[i - 1]: ""} />);
    }

    return (
      <div className="container">
        <div className="lists">
          <InputBox
          placeholder="Add a new todo here..."
          onSubmit={this.handleSubmit} />
          { todos }
        </div>
      </div>
    );
  }
}

const TodoItem = (props) => {
  return (
    <li className="item"><span className="num">{props.num}</span>{props.title}<button>X</button></li>
  );
}

export default App;
