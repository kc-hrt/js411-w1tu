import { React } from 'react';
import { useState } from 'react';
import remove from './delete.svg';
import highImg from './high.svg';
import normalImg from './normal.svg';
import lowImg from './low.svg';

let statusImg = normalImg

function ToDoCard(props) {

  const { title, clickToRemove, index } = props
  const [priority, setpriority] = useState("normal")

  const statusChange = (e) => {
    console.log("🌈", priority)
    if (priority === "normal") {
      setpriority("high")
      statusImg = highImg
    } else if (priority === "high") {
      setpriority("low")
      statusImg = lowImg
    } else if (priority === "low") {
      setpriority("normal")
      statusImg = normalImg
    }
  }

  return (
    <li>

      <img class='remove' src={remove} alt='delete' onClick={() => { clickToRemove(index) }} />
      <img class='status' src={statusImg} alt={priority} onClick={statusChange} />
      {title}
    </li>
  )
}

export default ToDoCard;