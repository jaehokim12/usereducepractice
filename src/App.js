import { useState, useReducer } from 'react';
import { indexInitialState, indexReducer } from './indexReducer';
function App() {
  const [state, dispatch] = useReducer(indexReducer, indexInitialState);
  return (
    <div>
      <h1>{state.text}</h1>
      <h2>{state.count}</h2>
      <button
        onClick={() => {
          dispatch({ type: 'changeTokor' });
          console.log(state);
        }}
      >
        한글
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'changeToEng' });
          console.log(state);
        }}
      >
        english
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'minusCount' });
          console.log(state);
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'plusCount' });
        }}
      >
        +
      </button>
    </div>
  );
}
export default App;
