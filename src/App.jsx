import React, { useState, useReducer} from "react"
// import logo from './logo.svg';

import './App.css';

const ACTIONS = {
  ADD_TO_DO : "add-todo"
}

const  reducer = (todos,action) => {
  switch (action.type){
    case ACTIONS.ADD_TO_DO:
      return [...todos, newtodo(action.payload.name)]

      default: return todos
  } 
    

}

const newtodo = (name) => {
return{id:Date.now(), name:name, complete: false}
}
function App() {

  const [todos, dispatch]  = useReducer(reducer,[])

  const[name,setName] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({ type:ACTIONS.ADD_TO_DO, payload:{name:name}}, )
    setName("")
  }

console.log(todos)
    return(
      <div className="App">
        <form onSubmit={handleSubmit}>
          <label>Something</label>
         <input value={name} type="text" onChange={ e => setName(e.target.value)} />
        </form>
      
      </div>
    );
}

export default App;
