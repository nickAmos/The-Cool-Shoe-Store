
import Header from './Header';
import ShoeDisplay from './ShoeDisplay';
import { useState } from 'react';
import { shoes } from '../Shoes';


export default function Home({changeShoe, cart}) {

    const [includedShoes, setIncludedShoes] = useState(shoes)

  const getDataApp = (data) => {
    setIncludedShoes(data);
  }

    return (
        <>
        <Header cart={cart} getDataApp={getDataApp}/>
        <ShoeDisplay changeShoe={changeShoe} includedShoes={includedShoes} getDataApp/>
        </>
    )
}