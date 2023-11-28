import { Link } from 'react-router-dom';
import '../styling/Shoe.css';
export default function Shoe({shoe, changeShoe}) {

    /*index is the position of the shoe in the display array
    Note: when a filter is applied to the display array shoes will
    have a different index to the one they started with */
const placholder = `<image placeholder>`


let src = '';

// put custom style tags in below <img> so that each logo is sized coorect

if (shoe.brand === 'Nike') {
    src = <img style={{height: 20}} src={require('../Images/NikeTickR.png')} alt='brandlogo' />
} else if (shoe.brand === 'Adidas') {
    src = <img style={{width: 50}} src={require('../Images/adidasStretch.png')} alt='brandlogo' />

} else if (shoe.brand === 'Saucany') {
    src = <img style={{height: 15}} src={require('../Images/Saucony.png')} alt='brandlogo' />
}

const handleClick = () => {
    changeShoe([shoe.name, shoe.type, shoe.price])
    //currently pass it as an array. 
}


    return(
        <div id='container-shoe' onClick={() => {handleClick()}}>
            <Link to='/SelectedShoe'>
            <div id="image-placeholder">
                <p>{placholder}</p>
            </div>
            </Link>
            <div id='nameAndBrand'>
                <div id='shoeName'><p>{shoe.name}</p></div>
                <div id='brandLogo'>{src}</div>
            </div>
            <div id='typeAndPrice'>
                <div id='shoeType'><p>{shoe.type}</p></div>
                <div id='shoePrice'><p>{`$${shoe.price}.00 AUD`}</p></div>
            </div>

            
            
        </div>
    )
}