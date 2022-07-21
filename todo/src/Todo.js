import React from 'react'
import './Todo.css'

function Todo() {

  const [text, setText] = React.useState("");
  const [items, setItems] = React.useState([]);

  function handleChange(event) {
    let t = event.target.value;
    setText(t);
  }

  function addItem(event) {
    event.preventDefault();
    if(text) {
    setItems([...items, text]);
    setText("");
    }
  }

  return (
  <div className='container'>
    <h1>Todo</h1>
    <form>
      <input onChange={handleChange} type="text" value={text}></input>
      <button onClick={addItem}>Add</button>
    </form>
    <ul>
      {items.map(item=><li>{item}</li>)}
    </ul>
  </div>)
}

export default Todo
