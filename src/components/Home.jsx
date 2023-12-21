
import Header from './Header';
import ShoeDisplay from './ShoeDisplay';
import { useState } from 'react';
import { shoes } from '../Shoes';


export default function Home({changeShoe, cart, filterCart, subtotal}) {

    const [includedShoes, setIncludedShoes] = useState(shoes)

  const getDataApp = (data) => {
    setIncludedShoes(data);
  }

    return (
        <>
        <Header cart={cart} changeShoe={changeShoe} getDataApp={getDataApp} filterCart={filterCart} subtotal={subtotal}/>
        <ShoeDisplay changeShoe={changeShoe} includedShoes={includedShoes} getDataApp/>
        </>
    )
}