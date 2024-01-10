
import { Button, Icon } from 'semantic-ui-react';
import '../styling/CartDisplay.css';
import { Link } from 'react-router-dom';
import ShoeForCart from './ShoeForCart';
import {motion} from 'framer-motion'

export default function CartDisplay({cart, filterCart, changeShoe}) {
    

    return(
        <>

                    {cart.map((shoe, index) => {
                        return (
                            <div id='link-container'>
                            <motion.div key={index} id="flex-container" onClick={() => changeShoe(shoe)}
                            whileHover={{
                                scale: 1.05,
                                transition: { type: "spring",
                                stiffness: 260,
                                damping: 20 },
                              }}>
                                
                                <ShoeForCart shoe={shoe} filterCart={filterCart} changeShoe={changeShoe} />
                            </motion.div>
                            </div>
                        )})}
        </>
    )
}