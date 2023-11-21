import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import ShoeDisplay from './components/ShoeDisplay';
import { shoes } from './Shoes';

function App() {

  const [includedShoes, setIncludedShoes] = useState(shoes)

  const getDataApp = (data) => {
    setIncludedShoes(data);
    console.log(data);
  }

  return (
    <div className="App">
      <Header getDataApp={getDataApp}/>
      <ShoeDisplay includedShoes={includedShoes}/>
    </div>
  );
}

export default App;



/*
ShoeDisplay component should create a copy of the shoes array and map
its content to the screen.

The shoes array should be manipulated by a functional component which is
connected to the filter component.



*/