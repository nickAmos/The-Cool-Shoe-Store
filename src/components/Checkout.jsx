import { Link } from "react-router-dom";
import '../styling/Checkout.css';
import { Button, Icon } from "semantic-ui-react";
import { useState } from "react";
import { Modal, Box } from "@mui/material";

export default function Checkout({cart, filterCart, subtotal}) {

    const [openDetails, setOpenDetails] = useState(false);
    const handleOpenDetails = () => setOpenDetails(true);
    const handleCloseDetails = () => setOpenDetails(false); 

   

    const handleExpress = () => {
        if (express) {
            setExpress(!express);
            return;
        }

        if (!express && standard) {
            setExpress(!express);
            setStandard(!standard);
            return;
        }

        if (!express && !standard) {
            setExpress(!express);
        }
        
    }

    const handleStandard = () => {
        if (standard) {
            setStandard(!standard);
            return;
        }

        if (!standard && express) {
            setStandard(!standard);
            setExpress(!express);
            return;
        }

        if(!standard && !express) {
            setStandard(!standard);
        }

    }



    const styleDetails = {
        position: 'absolute', top: '50%', left: '50%', padding: 0, marginLeft:'-600px', marginTop: '-400px',
        width: '1200px', height: '800px', bgcolor: 'white', border: '2px solid #000', boxShadow: 24, p: 4
      };

      

      const [express, setExpress] = useState(false);
      const [standard, setStandard] = useState(false);

    return(
        <>

            <Modal open={openDetails} onClose={handleCloseDetails} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">  
                <Box sx={styleDetails}>
                    <div id="style-details-container">
        <div id="close-modal" onClick={() => handleCloseDetails()}><Icon name="close"/></div>

                        <div id="shoe-header"></div>
                        <div id="shoe-description">
                            <div id='text-component'>
                            </div>
                            <div id="image-component">
                            </div>    
                        </div>
                        <div id="worn-by"></div>

                    </div>
                </Box> 
            </Modal> 


        <div id="checkout-container-flex">
            <div id="checkout-flex-child">
            <div id="checkout-shoe-section">
                <div id="checkout-map">
                {cart.map((shoe, index) => {
                        return (
                            <div key={index} id="flex-container-ch">
                                
                                <div id='text-section-ch'>
                                    <div id='name-exi-ch'>
                                        <h4>{shoe.name}</h4>
                                       
                                    </div>
                                    <div>
                                        <h4>Size {shoe.size}</h4>
                                    </div>
                                    <div id='price-remove-ch'>
                                        <div><p>${shoe.price}.00 AUD</p></div>
                                    </div>
                                </div>
                                <div id='img-section-ch'>
                                    <p>img here</p>
                                </div>
                                <div id="quantity-delete">
                                    <div id='button-container-ch' onClick={() => {filterCart(shoe.id)}}><Button compact basic color="red"><div id="wider-button">Remove</div></Button></div>
                                    <div id='button-container-ch' onClick={() => {handleOpenDetails()}}><Button compact basic color="black"><div id="wider-button">Details</div></Button></div>
                                </div>
                            </div>
                        )})}
            
                </div>
                <div id="subtotal-container">
                    <div id="subtotal-child">
                        <p>Subtotal ${subtotal}.00 AUD</p>
                    </div>
                </div>
                </div>
                <div id="checkout-img-section">
                    <div id="shipping-details">
                        <div id="shipping-title"><h2>Shipping details</h2></div>
                        <div id="input-items">
                            <div id="input-child-primary"><input placeholder="Address Line 1" id="primary-input"></input></div>
                            <div id="input-child-primary"><input placeholder="Address Line 2" id="primary-input"></input></div>
                            <div id="input-child-secondary"><input placeholder="State" id="secondary-input"></input><input placeholder="Postcode" id="secondary-input"></input></div>
                            <div id="input-child-primary"><input placeholder="Country" id="primary-input"></input></div>
                        </div>
                    </div>

                    <div id="shipping-delivery">
                        <div id="shipping-title-delivery"><h2>Delivery Method</h2></div>
                        <div id="button-flexbox">
                            <div id="toggle-button"><Button  toggle active={standard} onClick={() => handleStandard()}  >Standard</Button></div>
                            <div id="toggle-button"><Button  toggle active={express} onClick={() => handleExpress()}  >Express</Button></div>
                        </div>
                    </div>

                    <div id="shipping-checkout">
                    <div id="shipping-title-checkout"><h2>Payment Method</h2> </div>
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

