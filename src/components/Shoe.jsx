import { Link } from 'react-router-dom';
import '../styling/Shoe.css';
import getShoe from './GetShoe';
export default function Shoe({shoe, changeShoe}) {

    /*index is the position of the shoe in the display array
    Note: when a filter is applied to the display array shoes will
    have a different index to the one they started with */



let src = '';
let image = getShoe(shoe.name, '400px', '200px')

// put custom style tags in below <img> so that each logo is sized coorect

if (shoe.brand === 'Nike') {
    src = <img style={{height: 20}} src={require('../Images/NikeTickR.png')} alt='brandlogo' />
} else if (shoe.brand === 'Adidas') {
    src = <img style={{width: 50}} src={require('../Images/adidasStretch.png')} alt='brandlogo' />

} else if (shoe.brand === 'Saucony') {
    src = <img style={{height: 15}} src={require('../Images/Saucony.png')} alt='brandlogo' />
}



const handleClick = () => {
    changeShoe(shoe)
    //changeShoe([shoe.name, shoe.type, shoe.price])
    //currently pass it as an array. 
}


    return(
        <div id='container-shoe' onClick={() => {handleClick()}}>
            <Link to='/SelectedShoe'>
            <div id="image-placeholder">
                {image ? <div>{image}</div> : null}
            </div>
            </Link>
            <div id='shoe-txt-container'>
                <div id='nameAndBrand'>
                    <div id='shoeName'><p>{shoe.name}</p></div>
                    <div id='brandLogo'>{shoe.type}</div>
                </div>
                <div id='typeAndPrice'>
                    <div id='shoeType'><p>{src}</p></div>
                    <div id='shoePrice'><p>{`$${shoe.price}.00 AUD`}</p></div>
            </div>
            </div>

            
            
        </div>
    )
}