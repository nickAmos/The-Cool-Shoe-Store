import '../styling/Card.css';
import {motion} from 'framer-motion';
import getShoe from './GetShoe';


export default function Card({shoe}) {


let image = getShoe(shoe.name, '350px', '175px');



    return(
        <motion.div id="card-border" whileHover={{
            scale: 1.1,
            transition: { type: "spring",
            stiffness: 260,
            damping: 20 },
          }}
          whileTap={{ scale: 0.9 }}
          >
            <div id="picture-container">
                {image}
            </div>
            <div id="info-section">

                    <p>{shoe.name}</p>
     
                
            </div>
        </motion.div>
    )
}


/* picture container has padding at bottom to make img not have
bottom border radius */


/* Need to implement random selection of that brands shoe.  */