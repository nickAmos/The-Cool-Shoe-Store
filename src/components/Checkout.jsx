import { Link } from "react-router-dom";
import '../styling/Checkout.css';

export default function Checkout({cart, filterCart}) {



    return(
        <>
        <div id="checkout-container-flex">
            <div id="checkout-flex-child">
                <div id="checkout-img-section"></div>
                <div id="checkout-shoe-section">
                <div>
                {cart.map((shoe, index) => {
                    return ( <div key={index}>
                                <p>{shoe.name} size: {shoe.size} id:{shoe.id}</p>
                                <button onClick={() => filterCart(shoe.id)}>clear</button>
                            </div> )})}
            
            </div>
                </div>

                    

            

            </div>

            </div>

            <Link to='/'>
                home
            </Link>
        </>
    )
}



/*map of shoes should be shown on the right, they should be clickable
 to bring up an image of the shoe that appears on the right.
 sub totals and payment options can be seen below */

