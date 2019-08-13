import React, { Component } from 'react';
import Todos from "./components/Todos"

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Take out the trash",
        completed: false
      },
      {
        id: 2,
        title: "Dinner with husband",
        completed: true
      },
      {
        id: 3,
        title: "Meeting with boss",
        completed: false
      }
    ]
  }

  markComplete = () =>{

  }
  
  render() {
    console.log(this.state.todos)
    return (
      <div>
        <Todos
          todos={this.state.todos}
          markComplete={this.markComplete}
        />
      </div>
    );
  }
}

export default App;