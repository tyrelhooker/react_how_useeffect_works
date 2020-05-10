import React, { useEffect, useState, useRef } from 'react';
import './App.css';
// import LifecycleDemo from './components/LifecycleDemo';
import RedditFetch from './components/RedditFetch';

const LifecycleDemo = () => {
  useEffect(() => {
    console.log('mounted');

    // Called prior to unmounting ~ componentWillUnmount
    return () => console.log('unmounting...');
  }, []);

  return "I'm an lifecycle demo";
}

function App() {
  // Sets state for triggering a re-render
  const [random, setRandom] = useState(Math.random());
  // Track whether LifecycleDemo is shown or hidden
  const [mounted, setMounted] = useState(true);

  const reRender = () => setRandom(Math.random());

  const toggle = () => setMounted(!mounted);

  // Store a reference to the input's DOM node
  const inputRef = useRef();
  // Store input value in state
  const [value, setValue] = useState("");

  useEffect(() => {
    console.log('ref render');
    // inputRef.current.focus();
  }, [inputRef]);

  const [inputValue, setInputValue] = useState('reactjs');
  const [subreddit, setSubreddit] = useState(inputValue);

  const handleSubmit = e => {
    e.preventDefault();
    setSubreddit(inputValue);
  };

  return (
    <div className="App">
      <button onClick={reRender}>Re-render</button>
      <br></br>
      <button onClick={toggle}>Show/Hide LifecycleDemo</button>
      {mounted && <LifecycleDemo />}
      <br></br>
      <br></br>
      <form onSubmit={handleSubmit}>
        <input value={inputValue} onChange={e => setInputValue(e.target.value)} />
      </form>
      
      <br></br>
      <br></br>
      <RedditFetch subreddit={subreddit}/>
    </div>
  );
}

export default App;
