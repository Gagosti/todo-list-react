import React from 'react'
import List from './List'
import TodoForm from './TodoForm'
import Item from './Item'
import './Todo.css'

function Todo() {

  const [items, setItems] = React.useState([]);

  function onAddItem(text) {
    let item = new Item(text);
    setItems([...items, item])
  }

  return (
  <div className='container'>
    <h1>Todo</h1>
    <TodoForm onAddItem={onAddItem}></TodoForm>
    <List items={items}></List>
  </div>)
}

export default Todo
