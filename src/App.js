import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Points points="0" />
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

const TodoList = (props) => {

  const renderTodos = () => {
    for (var i = 1; i <= 10; i++) {
      return (
        <TodoList num="1" title="" />
      )
    }
  }

  return (
    <div className="container">
      <div className="lists">
        <form>
          <input type="text" placeholder="Add a new todo here..." />
        </form>
        <TodoItem num="1" title="Hell yea man" />
        <li className="item"><span className="num">2</span><a href="#">X</a></li>
        <li className="item"><span className="num">3</span><a href="#">X</a></li>
        <li className="item"><span className="num">4</span><a href="#">X</a></li>
        <li className="item"><span className="num">5</span><a href="#">X</a></li>
        <li className="item"><span className="num">6</span><a href="#">X</a></li>
        <li className="item"><span className="num">7</span><a href="#">X</a></li>
        <li className="item"><span className="num">8</span><a href="#">X</a></li>
        <li className="item"><span className="num">9</span><a href="#">X</a></li>
        <li className="item"><span className="num">10</span><a href="#">X</a></li>
      </div>
    </div>
  );
}

const TodoItem = (props) => {
  return (
    <li className="item"><span className="num">{props.num}</span>{props.title}<a href="#">X</a></li>
  );
}

export default App;
