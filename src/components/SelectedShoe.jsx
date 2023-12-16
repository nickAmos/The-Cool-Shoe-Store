import { Link } from 'react-router-dom';

export default function SelectedShoe({shoe}) {

    console.log(shoe);

    let copyShoe = shoe;

    return(
        <>
        <p>{copyShoe.brand}</p>
        <p>{copyShoe.name}</p>
        <p>{copyShoe.price}</p>
        <Link to='/'>
            <div>return</div>
        </Link>
        </>
    )
}