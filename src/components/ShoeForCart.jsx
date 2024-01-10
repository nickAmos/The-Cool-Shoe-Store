
import { Button, Icon } from 'semantic-ui-react';
import '../styling/CartDisplay.css';
import { Link } from 'react-router-dom';
import getShoe from './GetShoe';


export default function ShoeForCart({shoe, filterCart, changeShoe}) {

    let image = getShoe(shoe.name, '130px', '65px');

    return(
        <>
                              
                                <div id='text-section'>
                                    <Link onClick={() => changeShoe(shoe)} id='text-link' to='/selectedShoe'>
                                    <div id='name-exit'>
                                        <h4>{shoe.name}</h4>
                                       
                                    </div>
                                    <div id='size-exit'>
                                        <p>Size {shoe.size}</p>
                                    </div>
                                    <div id='price-remove'>
                                        <div><p>${shoe.price}.00 AUD</p></div>
                                    </div> 
                                    </Link>  
                                </div>
                                <div id='img-section'>
                                    {image}
                                    <div id='icon-container' onClick={() => {filterCart(shoe.id)}}><Icon name='close'/></div>
                                    
                                </div>
        </>
    )
}