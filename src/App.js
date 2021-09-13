import React, { Component } from 'react';
import TodoCard from './ToDoCard';
import logo from './logo.svg';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      input: '',
      items: [],
      isClicked: false,
    }
  }

  inputUpdate = (event) => {
    this.setState({ input: event.target.value })
  }

  formSubmit = event => {
    event.preventDefault()
    console.log("THIS IS STATE", this.state.items)
    this.setState({
      items: [...this.state.items, this.state.input],
      input: ''
    })
  }

  toggle = () => {
    this.setState({ isClicked: !this.state.isClicked })
    console.log(this.state.isClicked)
  }

  deleteItem = (index) => {
    console.log('was clicked', index)
    let copyOfList = this.state.items
    copyOfList.splice(index, 1)
    this.setState({ listOfTodos: [...copyOfList] })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Kasey's ToDos</h2>
          <img src={logo} className="App-logo" alt="logo" />


          <form onSubmit={this.formSubmit}>
            <input value={this.state.input} onChange={this.inputUpdate}></input>
            <button>Add to List</button>
          </form>
          <ul>{this.state.items.map((todo, index) => {
            return <TodoCard key={index} index={index} title={todo}
              clickToRemove={this.deleteItem}>
            </TodoCard>
          })}
          </ul>
        </header>
      </div>
    );
  }
}

export default App;