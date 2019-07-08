import React, { Component } from 'react';
import './App.css';

import tasks from './sample/tasks.json';
console.log(tasks);

class App extends Component{

  state = {
    tasks: tasks
  }
  render(){
    return <div>
      { this.state.tasks.map(e => <h1>{e.title}</h1>) }
    </div>
  }
}


export default App;
