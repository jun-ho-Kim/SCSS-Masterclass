import React, {useReducer, useState} from 'react';
import UserContextProvider, { useSetLang } from './context';
import Screen from './Screen';
import translation from "./translation";

const initialState = {
  toDos: []
};

const ADD = "add";

const reducer = (state, action) => {
  switch(action.type) {
    case ADD:
      return {toDos: [...state.toDos, {text: action.payload}]}
    default:
      return;
  }
}


function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [newToDo, setNewToDo] = useState("");
  const onSumbit = e => {
    e.preventDefault();
    dispatch({type: ADD, payload: newToDo});
  };
  const onChange = e => {
    const {
      target : {value}
    } = e;
    setNewToDo(value);
  };
  return (
    <>
    <UserContextProvider defaultLang="en" translation={translation}>
      <Screen />
    </UserContextProvider>
    <h1>Add to do </h1>
    <form onSubmit={onSumbit}>
      <input
        value={newToDo}
        type="text"
        placeholder="Write to do"
        onChange={onChange}
      />
    </form>
    <h4>{state.toDos.map(todo => <li>{todo.text}</li>)}</h4>
    </>
  )
}

export default App;
