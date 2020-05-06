import React, { useEffect, useState } from 'react';
import './App.css';
// import LifecycleDemo from './components/LifecycleDemo';

const LifecycleDemo = () => {
  useEffect(() => {
    console.log('render');

    // Called prior to unmounting ~ componentWillUnmount
    return () => console.log('unmounting...');
  })

  return "I'm an lifecycle demo";
}

function App() {
  // Sets state for triggering a re-render
  const [random, setRandom] = useState(Math.random());
  // Track whether LifecycleDemo is shown or hidden
  const [mounted, setMounted] = useState(true);

  const reRender = () => setRandom(Math.random());

  const toggle = () => setMounted(!mounted);

  return (
    <div className="App">
      <button onClick={reRender}>Re-render</button>
      <button onClick={toggle}>Show/Hide LifecycleDemo</button>
      {mounted && <LifecycleDemo />}
      
    </div>
  );
}

export default App;
