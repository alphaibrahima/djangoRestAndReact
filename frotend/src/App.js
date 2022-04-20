// src/App.js
import React, { Component } from 'react';
import axios from 'axios';


// const list = [
//   {
//     "id":1,
//     "title":"1st todo",
//     "body":"Learn Django properly."
//   },
//   {
//     "id":2,
//     "title":"Second item",
//     "body":"Learn Python."
//   },
//   {
//     "id":3,
//     "title":"Learn HTTP",
//     "body":"It's important."
//   }
// ]

class App extends Component {
  state = {
    todos: []
  };

  // new
  componentDidMount(){
    this.getTodo();
  }

  // new
  getTodo() {

    axios
      .get('http://127.0.0.1:8000/api/')
      .then(res => {
        this.setState({todos: res.data });
      })

      .catch(err => {
        console.log(err);
      });
  }
  
  render() {
    return (
        <div className='container'>
          {this.state.todos.map(item => (
            <div key={item.id}>
              <h1>{item.title}</h1>
              <span>{item.body}</span>
          </div>
          ))}
        </div>
      );
    }
  }
  export default App;
