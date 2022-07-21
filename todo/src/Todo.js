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

  function onItemDeleted(item) {
    let filteredItems = items.filter(it => it.id != item.id)
    setItems(filteredItems)
  }

  function onDone(item) {
    let upDatedItems = items.map(it=> {
      if (it.id === item.id){
          it.done = !it.done;
      }
      return it;
    })

    setItems(upDatedItems);
  }

  return (
  <div className='container'>
    <h1>Todo</h1>
    <TodoForm onAddItem={onAddItem}></TodoForm>
    <List onDone={onDone} onItemDeleted={onItemDeleted} items={items}></List>
  </div>)
}

export default Todo
