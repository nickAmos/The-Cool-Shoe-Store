
import './App.css';
import Home from './components/Home';
import { Route, Routes} from "react-router-dom";
import SelectedShoe from './components/SelectedShoe';
import { useState } from 'react';


function App() {

  const getDataApp = (data) => {
    
    console.log(data);
  }

  const [selectedShoe, setSelectedShoe] = useState(null);



  const changeShoe = (shoe) => {
    console.log(shoe);
    setSelectedShoe(shoe);
  }

  return (
    <div className="App">
      <Routes>
        <Route  path='/' element={<Home changeShoe={changeShoe} getDataApp={getDataApp}/>}/>
        <Route path='/selectedShoe' element={<SelectedShoe shoe={selectedShoe}/>} />
      </Routes>

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