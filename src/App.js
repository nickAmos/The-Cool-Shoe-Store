
import './App.css';
import Home from './components/Home';
import { Route, Routes} from "react-router-dom";
import SelectedShoe from './components/SelectedShoe';
import { useEffect, useState } from 'react';
import Checkout from './components/Checkout';


function App() {

 

  const [selectedShoe, setSelectedShoe] = useState([]);
  const [cart, setCart] = useState([]);

  const pushCart = (shoe) => {
    setCart([...cart, shoe]);
  }

  const filterCart = (id) => {
    setCart(currentShoes => {
      return currentShoes.filter(shoe => shoe.id !== id);
    })
  }


  const changeShoe = (shoe) => {
   
    setSelectedShoe(shoe);
  }

  useEffect(() => {
    console.log(selectedShoe);
  }, [selectedShoe])

  return (
    <div className="App">
      <Routes>
        <Route  path='/' element={<Home cart={cart} pushCart={pushCart} changeShoe={changeShoe} />}/>
        <Route path='/selectedShoe' element={<SelectedShoe pushCart={pushCart} cart={cart} shoe={selectedShoe}/>} />
        <Route path='/checkout' element={<Checkout cart={cart} filterCart={filterCart}/>}/>
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