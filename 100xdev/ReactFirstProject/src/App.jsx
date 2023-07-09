import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

var todo=[{
titile:"Go to gym",
description:"At 7 am ",
id:1
},
{
titile:"Go to swiming",
description:"At 9 am ",
id:2
}];

function App() {
  const [todo, setTodo] = useState({
    title: "go to gym",
    description: "go to mall",
    id: 1
  });
  setInterval(() => {
    setTodo({
      title: "go eat something",
      description: "eat food",
      id: 3
    });
  }, 2000);

return (
  <div>
    <h5>hi there</h5>
    <span>{todo.title}</span>
    {todo.description}
    {todo.id}
    <PersonName firstName={todo.title} lastName={"Majumdar"}></PersonName>
  </div>
)
}

function PersonName(props) {
  return <div>
   {props.firstName} {props.lastName}
  </div>
}

export default App
