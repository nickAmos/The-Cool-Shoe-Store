
import './App.css';
import Home from './components/Home';
import { Route, Routes} from "react-router-dom";
import SelectedShoe from './components/SelectedShoe';
import { useEffect, useState } from 'react';
import Checkout from './components/Checkout';



function App() {

 

  const [selectedShoe, setSelectedShoe] = useState([]);
  const [cart, setCart] = useState([]);
  const [subtotal, setSubtotal] = useState(0);

  const pushCart = (shoe) => {
    setCart([...cart, shoe]);
  }

  const filterCart = (id) => {
    setCart(currentShoes => {
      return currentShoes.filter(shoe => shoe.id !== id);
    })
  }

  function totalCart(shoppingCart) {
    let price = 0
      for (let i=0; i<shoppingCart.length; i++) {
        price += shoppingCart[i].price
      }
      setSubtotal(price);
  }

  useEffect(() => {
    totalCart(cart);
    console.log(subtotal);
  },[cart])

  const changeShoe = (shoe) => {
   
    setSelectedShoe(shoe);
    
    
  }


  return (
    <div className="App">
      <Routes>
        <Route  path='/' element={<Home cart={cart} pushCart={pushCart} changeShoe={changeShoe}filterCart={filterCart} subtotal={subtotal} />}/>
        <Route path='/selectedShoe' element={<SelectedShoe pushCart={pushCart} changeShoe={changeShoe} cart={cart} shoe={selectedShoe}/>} />
        <Route path='/checkout' element={<Checkout cart={cart} filterCart={filterCart} subtotal={subtotal} changeShoe={changeShoe}/>}/>
      </Routes>

    </div>
  );
}

export default App;



/*
Things to do:

Style:
 - format selected shoe description/title/shoe type button to fit content better
 - clean up/add animation to cart display.
 - Images for all sections // might need dif resolutions for each page.
 - checkout page



Functionality: 
- fake purchasing progression


*/