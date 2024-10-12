import './App.css';
import Header from "./components/Header";
import StateLogin from "./components/StateLogin";
import React from 'react';
import Signup from './components/Signup';
import RefLogin from './components/RefLogin';
import StateLoginIIWCustomHooksAndExValidation from './components/StateLoginIIWCustomHooksAndExValidation';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <StateLoginIIWCustomHooksAndExValidation />
      </main>
    </>
  );
}

export default App;