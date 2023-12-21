import { Link } from "react-router-dom"

export default function Checkout({cart, filterCart}) {



    return(
        <>
            <h1>checkout</h1>
            <div>
            {cart.map((shoe, index) => {
    return (
        <div key={index}>
        <p>{shoe.name} size: {shoe.size} id:{shoe.id}</p>
        <button onClick={() => filterCart(shoe.id)}>clear</button>
        </div> )})}
            
                 </div>
            <Link to='/'>
                home
            </Link>
        </>
    )
}

