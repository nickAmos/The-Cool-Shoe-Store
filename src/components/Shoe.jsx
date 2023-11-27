import { Placeholder } from 'semantic-ui-react';
import '../styling/Shoe.css';
export default function Shoe({shoe, index}) {

    /*index is the position of the shoe in the display array
    Note: when a filter is applied to the display array shoes will
    have a different index to the one they started with */
const placholder = `<image placeholder>`


let src = '';

// put custom style tags in below <img> so that each logo is sized coorect

if (shoe.brand === 'Nike') {
    src = <img src={require('../Images/NikeTickR.png')} alt='brandlogo' />
} else if (shoe.brand === 'Adidas') {
    src = <img src={require('../Images/adidas.jpeg')} alt='brandlogo' />

} else if (shoe.brand === 'Saucany') {
    src = <img src={require('../Images/Saucony.png')} alt='brandlogo' />
}



    return(
        <div id='container-shoe'>
            <div id="image-placeholder">
                <p>{placholder}</p>
            </div>
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