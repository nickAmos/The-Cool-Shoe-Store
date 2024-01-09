
import { Button, Icon } from 'semantic-ui-react';
import '../styling/CartDisplay.css';
import { Link } from 'react-router-dom';
import ShoeForCart from './ShoeForCart';

export default function CartDisplay({cart, filterCart, changeShoe}) {
    

    return(
        <>

                    {cart.map((shoe, index) => {
                        return (
                            <div key={index} id="flex-container">
                                <ShoeForCart shoe={shoe} filterCart={filterCart} changeShoe={changeShoe} />
                            </div>
                        )})}
        </>
    )
}