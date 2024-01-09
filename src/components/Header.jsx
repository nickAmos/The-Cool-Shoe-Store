import '../styling/Header.css'
import 'semantic-ui-css/semantic.min.css'
import { Icon, Button } from 'semantic-ui-react';
import Box from '@mui/material/Box';
import 'semantic-ui-css/semantic.min.css'
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import Filter from './Filter';
import { shoes } from '../Shoes';
import { Link } from 'react-router-dom';
import CartDisplay from './CartDisplay';






const styleFilter = {
    position: 'absolute', top: '10%', padding: 0,
    width: '30vw', height: '90vh', bgcolor: 'white', border: '2px solid #000', boxShadow: 24, p: 4,
    borderRadius: 5, borderTopLeftRadius: 0, borderBottomLeftRadius: 0
  };


const styleCart = {
    position: 'absolute', top: '10%', right: 0, borderRadius: 5,
    width: '30vw', height: '90vh', bgcolor: 'white', border: '2px solid #000', p: 4, boxShadow: 24, 
    borderTopRightRadius: 0, borderBottomRightRadius: 0, 
  
  };




function Header({getDataApp, cart, filterCart, subtotal, changeShoe}) {

const [reset, setResest] = useState(false);
const [filterslider, setFilterslider] = useState(true);

const getData = (data) => {
    
        
        getDataApp(data);
        if (shoes.length === data.length) {
            setResest(false);
            setFilterslider(true);
        } else {
            setResest(true);
            setFilterslider(false);
        }

}

const [openFilter, setOpenFilter] = useState(false);
const handleOpenFilter = () => setOpenFilter(true);
const handleCloseFilter = () => setOpenFilter(false);  

const [openCart, setOpenCart] = useState(false);
const handleOpenCart = () => setOpenCart(true);
const handleCloseCart = () => setOpenCart(false);  


    return (
        <>
            <div id="header-container">
                <div id='navbar'>
                    <div id='navbar-flex'>
                        <div id='left-box'>
                        <div className='icon-container' onClick={handleOpenFilter}>
                            {filterslider ? <Icon name='sliders horizontal' size='big'/> : null}
                        </div>
                        <div>
                        {reset ? <Button circular compact color='black' onClick={() => {
                            getData(shoes);
                        }}>reset</Button> : null}
                        </div>
                            <Modal open={openFilter} onClose={handleCloseFilter} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">  
                                    <Box sx={styleFilter}>
                                        <Filter onSubmit={getData} onClose={handleCloseFilter}/>
                                    </Box> 
                            </Modal> 
                         
                            
                            
                            
                        </div>
                        <div id='middle-box'>
                            <h1>The Shoe Store.</h1>
                        </div>
                        <div id='right-box'>
                            <div className='icon-container' onClick={handleOpenCart}>
                                <Button.Content visible>
                                                <Icon.Group>
                                                    <Icon size='big' color='white' id='shopping-trolley' name='shop'/>
                                                    <Icon corner='top right'><Button id='cartcounter' circular compact  size='mini' >{cart.length}</Button></Icon>
                                                </Icon.Group>
                                </Button.Content>
                            </div>
                            <Modal open={openCart} onClose={handleCloseCart} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">  
                                    <Box sx={styleCart}>
                                        <div id='cart-container'>
                                        <div id='cartdisplay-container'>
                                            <CartDisplay cart={cart} filterCart={filterCart} changeShoe={changeShoe}/>
                                        </div>

                                        <div id='checkout-container'>
                                            <div id='subtotal-container'> 
                                                <p>Subtotal: <b>${subtotal}.00 AUD</b></p>
                                            </div>
                                            <div id='checkout-button-container'>
                                                <Link to='/checkout'>
                                                    <div><Button compact circular color='black'>Checkout</Button></div>
                                                </Link>
                                            </div>
                                            

                                        </div>

                                        </div>

                                    </Box> 
                            </Modal>
                        </div>
                    </div>

                </div>
                <div id='scrolling-banner'>
                    <div id='scroll'>
                        <div id='right-left-middle'>
                            Shop top of the range shoes for both race events and every day training. We currently stock Nike, Saucony and Adidas. 
                            <span></span>
                        </div>
                        <div id='right-left-LHS'>
                            Shop top of the range shoes for both race events and every day training. We currently stock Nike, Saucony and Adidas.
                            <span></span>
                        </div>
                    </div>
                </div>

            </div>
            
        </>
    )
}

export default Header;






/* Old modal:
(paste under "left-div")
                <div className='icon-container' onClick={handleOpenFilter}>
                    <Icon name='sliders horizontal' size='big'/>
                        </div>
                            <Modal open={openFilter} onClose={handleCloseFilter} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">  
                                    <Box sx={styleFilter}>
                                    </Box> 
                            </Modal> 
                </div>   
*/   
