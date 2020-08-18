import React, {useReducer} from 'react';
import UserContextProvider from './context';
import Screen from './Screen';
import translation from "./translation";

const INCREMENT = "increment";
const DECREMENT = "decrement";

const reducer = (state, action) => {
  switch(action.type) {
    case INCREMENT:
      return {count: state.count + 1}
    case DECREMENT:
      return {count: state.count - 1}
    default:
      throw new Error();
  }
}


function App() {
  const [state, dispatch] = useReducer(reducer, {count: 0});
  return (
    <>
    <UserContextProvider defaultLang="en" translation={translation}>
      <Screen />
    </UserContextProvider>
    <h1>{state.count}</h1>
    <button onClick={() =>dispatch({type: INCREMENT})}>INCREMENT</button>
    <button onClick={() =>dispatch({type: DECREMENT})}>DECREMENT</button>
    </>
  )
}

export default App;
