import React from 'react';
import './App.css';
import Timer from './timer';
// import ObjectDisplay from './objectDisplay'

// const obj = { a: 3, b: 4, c: 5 };

// const obj = { a: 3, b: 4, c: 5, d: { e: 6, f: { g: 7 } } };

function App() {
  return (
    <>
      {/* <ObjectDisplay obj={obj} isInitiallyOpen /> */}
      <Timer />
    </>
  );
}

export default App;
