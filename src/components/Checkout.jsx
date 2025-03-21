import { Link } from "react-router-dom";
import '../styling/Checkout.css';
import { Button, Icon } from "semantic-ui-react";
import { useState } from "react";
import PaymentButton from "./PaymentButton";
import {motion} from 'framer-motion';
import ShoeForCheckout from "./ShoeForCheckout";


export default function Checkout({cart, filterCart, subtotal, changeShoe}) {
   

    const handleExpress = () => {
        setDelivery('3')

        if (express) {
            setExpress(!express);
            setDelivery('7')
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

        setDelivery('7')
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


      

      const [express, setExpress] = useState(false);
      const [standard, setStandard] = useState(false);
      const [delivery, setDelivery] = useState('7')

    return(
        <>

        <div id="checkout-header">
        <Link to='/'>
            <div id="home-container">
                
                <div id="home-arrow"><Icon name="arrow alternate circle left outline" /></div>
                <div id="home-arrow"><p>Return Home</p></div>
                
            </div>
            </Link>
            <div id="checkout-txt"><p>Checkout</p></div>
            <div id="home-container"></div>
        </div>
        <div id="checkout-container-flex">
            <div id="checkout-wrapper">
            <div id="checkout-flex-child">
            <div id="checkout-shoe-section">
                <div id="checkout-map">
                {(cart.length > 0) ? 
                <div>{cart.map((shoe, index) => {
                        return (
                            <ShoeForCheckout changeShoe={changeShoe} shoe={shoe} index={index} filterCart={filterCart} />
                        )})}</div>
                        :
                        <div id="empty-cart">
                            <motion.div id="empty-cart-p-container"
                                    whileHover={{
                                        scale: 1.1,
                                        transition: { type: "spring",
                                        stiffness: 260,
                                        damping: 20 },
                                      }}
                                      whileTap={{ scale: 0.9 }}>
                                        <Link to='/'>
                                <p id="empty-txt">Cart is empty... Go Home?</p>
                                </Link>
                                </motion.div>
                            </div>}

            
                </div>
                <div id="subtotal-container">
                    <div id="connector"></div>
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
                            {standard ? 
                            <div id="toggle-button"><Button id="toggle-button-active" onClick={() => handleStandard()} >Standard</Button></div>
                            :
                            <div id="toggle-button"><Button id="toggle-button-disabled" onClick={() => handleStandard()} >Standard</Button></div>
                            }
                            
                            {express ? 
                            <div id="toggle-button"><Button id="toggle-button-active" onClick={() => handleExpress()} >Express</Button></div>
                            :
                            <div id="toggle-button"><Button id="toggle-button-disabled" onClick={() => handleExpress()} >Express</Button></div>
                            }                        </div>
                    </div>

                    <div id="shipping-checkout">
                    <div id="shipping-title-checkout"><h2>Payment Method</h2> </div>
                    <div id="paywithButtonContainer">
                        <div id="buttonlayer">
                            <PaymentButton delivery={delivery} subtotal={subtotal}  color={'black'} paymentName={'Apple Pay'} paymentIcon={'apple'} txtColor={'white'} borderColorTop={'1px solid black'}  borderColorRight={'1px solid black'} borderColorBottom={'1px solid black'} borderColorLeft={'1px solid black'} pointer={'pointer'}/>
                            <PaymentButton delivery={delivery} subtotal={subtotal} color={'#FCBB32'} paymentName={'PayPal'} paymentIcon={'paypal'} txtColor={'#012169'} borderColorTop={'1px solid black'} borderColorRight={'1px solid black'} borderColorBottom={'1px solid black'} borderColorLeft={'1px solid black'} pointer={'pointer'}/>
                        </div>
                        <div id="buttonlayer">
                            <PaymentButton delivery={delivery} subtotal={subtotal} color={'white'} paymentName={'Google Pay'} paymentIcon={'google'} txtColor={'black'} borderColorTop={'3px solid #EA4335'} borderColorRight={'3px solid #4285F2'} borderColorBottom={'3px solid #34A853'} borderColorLeft={'3px solid #FBBC05'} pointer={'pointer'}/>
                            <PaymentButton delivery={delivery} subtotal={subtotal} color={'white'} paymentName={'Credit Card'} paymentIcon={'credit card outline'} txtColor={'black'} borderColorTop={'1px solid black'} borderColorRight={'1px solid black'} borderColorBottom={'1px solid black'} borderColorLeft={'1px solid black'} pointer={'pointer'}/>
                        </div>
                       
                    
                    
                    </div>
                    </div>
                    <div id="subtotal-right-side">
                        <p>Est. delivery time {delivery} days</p>
                    </div>
                </div>
                

                    

                </div>

            </div>

            </div>
        </>
    )
}



/*map of shoes should be shown on the right, they should be clickable
 to bring up an image of the shoe that appears on the right.
 sub totals and payment options can be seen below */

