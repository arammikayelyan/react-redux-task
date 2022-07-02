import React from 'react';
import { Categories } from './features/categories/Categories';
import { Cats } from './features/cats/Cats';
import './App.css';

function App() {
  return (
    <div className="App">
      <Categories />
      <Cats />
    </div>
  );
}

export default App;
