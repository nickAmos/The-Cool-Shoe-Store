
import { Button, Icon } from 'semantic-ui-react';
import '../styling/CartDisplay.css';
import { Link } from 'react-router-dom';
import getShoe from './GetShoe';

export default function ShoeForCart({shoe, filterCart, changeShoe}) {

    let image = getShoe(shoe.name, '140px', '70px');

    return(
        <>
        <div id='img-section'>
                                    {image}
                                </div>
                                <div id='text-section'>
                                    <div id='name-exit'>
                                        <h4>{shoe.name}</h4>
                                        <div id='icon-container' onClick={() => {filterCart(shoe.id)}}><Icon name='close'/></div>
                                    </div>
                                    <div>
                                        <h4>Size {shoe.size}</h4>
                                    </div>
                                    <div id='price-remove'>
                                        <div><p>${shoe.price}.00 AUD</p></div>
                                        <Link to='/selectedShoe'><Icon id='arrow-icon' onClick={() => changeShoe(shoe)}  name='arrow alternate circle right outline' size='large' color='black'></Icon></Link>
                                    </div>
                                    
                                </div>
        </>
    )
}