import React from 'react'
import Card from './Card'

function DoneImg(props) {
  if(props.done){
    return (<img alt="done" className="on" src="./assets/on.png"></img>)
  }else{
    return(<img alt="undone" className="off" src="./assets/off.png"></img>)
  }
}

function ListItem(props) {
  return(
      <li>
        <Card className={props.item.done ? "done item" : "item"}>
          {props.item.text}
          <di>
            <button onClick={()=>{props.onDone(props.item)}}><DoneImg done={props.item.done}></DoneImg></button>
            <button onClick={()=>{props.onItemDeleted(props.item)}}><img alt="delete" className="trash" src="./assets/bin.png"></img></button>
          </di>
        </Card>
      </li>)
}

export default ListItem
