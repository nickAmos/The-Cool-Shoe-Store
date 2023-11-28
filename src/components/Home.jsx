
import Header from './Header';
import ShoeDisplay from './ShoeDisplay';
import { useState } from 'react';
import { shoes } from '../Shoes';


export default function Home({changeShoe}) {

    const [includedShoes, setIncludedShoes] = useState(shoes)

  const getDataApp = (data) => {
    setIncludedShoes(data);
  }

    return (
        <>
        <Header getDataApp={getDataApp}/>
        <ShoeDisplay changeShoe={changeShoe} includedShoes={includedShoes} getDataApp/>
        </>
    )
}