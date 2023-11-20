import '../styling/Header.css'
import 'semantic-ui-css/semantic.min.css'
import { Icon } from 'semantic-ui-react';
import Box from '@mui/material/Box';
import 'semantic-ui-css/semantic.min.css'
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import Filter from './Filter';






const styleFilter = {
    position: 'absolute', top: '10%', padding: 0,
    width: '22vw', height: '90vh', bgcolor: 'white', border: '2px solid #000', boxShadow: 24, p: 4,
    borderRadius: 5, borderTopLeftRadius: 0, borderBottomLeftRadius: 0
  };


const styleCart = {
    position: 'absolute', top: '10%', right: 0, borderRadius: 5,
    width: '22vw', height: '90vh', bgcolor: 'white', border: '2px solid #000', p: 4, boxShadow: 24, 
    borderTopRightRadius: 0, borderBottomRightRadius: 0, 
  
  };




function Header() {

const getData = (data) => {
    
        console.log(data);

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
                            <Icon name='sliders horizontal' size='big'/>
                        </div>
                            <Modal open={openFilter} onClose={handleCloseFilter} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">  
                                    <Box sx={styleFilter}>
                                        <Filter onSubmit={getData}/>
                                    </Box> 
                            </Modal> 
                         
                            
                            
                            
                        </div>
                        <div id='middle-box'>
                            <h1>The Shoe Store.</h1>
                        </div>
                        <div id='right-box'>
                            <div className='icon-container' onClick={handleOpenCart}>
                            <Icon name="cart" size='big'/>
                            </div>
                            <Modal open={openCart} onClose={handleCloseCart} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">  
                                    <Box sx={styleCart}>

                                    </Box> 
                            </Modal>
                        </div>
                    </div>

                </div>
                <div id='scrolling-banner'>
                    <div id='scroll'>
                        <div id='right-left-middle'>
                            Huge summer sale on nike adidias and others omg incrediBLEE!, so many sales its crazyyyyyyy, like go and guy some shoes my guuy.
                            <span></span>
                        </div>
                        <div id='right-left-LHS'>
                            Huge summer sale on nike adidias and others omg incrediBLEE!, so many sales its crazyyyyyyy, like go and guy some shoes my guuy.
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
