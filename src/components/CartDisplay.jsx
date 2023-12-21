
import { Icon } from 'semantic-ui-react';
import '../styling/CartDisplay.css';

export default function CartDisplay({cart, filterCart}) {

    return(
        <>

                    {cart.map((shoe, index) => {
                        return (
                            <div key={index} id="flex-container">
                                <div id='img-section'>
                                    <p>img here</p>
                                </div>
                                <div id='text-section'>
                                    <div id='name-size'>
                                        <h4>{shoe.name}</h4>
                                        <p>{shoe.size}</p>
                                    </div>
                                    <div id='price-remove'>
                                        <div><p>${shoe.price}.00 AUD</p></div>
                                        <div id='icon-container' onClick={() => {filterCart(shoe.id)}}><Icon name='close'/></div>
                                    </div>
                                    
                                </div>
                            </div>
                        )})}
        </>
    )
}