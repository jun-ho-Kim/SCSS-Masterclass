import React from 'react';
import UserContextProvider from './context';
import Screen from './Screen';
import translation from "./translation";
function App() {
  return (
    <UserContextProvider defaultLang="en" translation={translation}>
      <Screen />
    </UserContextProvider>
  )
}

export default App;
