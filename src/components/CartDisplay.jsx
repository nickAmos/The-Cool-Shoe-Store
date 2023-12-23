
import { Button, Icon } from 'semantic-ui-react';
import '../styling/CartDisplay.css';
import { Link } from 'react-router-dom';

export default function CartDisplay({cart, filterCart, changeShoe}) {

    return(
        <>

                    {cart.map((shoe, index) => {
                        return (
                            <div key={index} id="flex-container">
                                <div id='img-section'>
                                    <p>img here</p>
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
                            </div>
                        )})}
        </>
    )
}