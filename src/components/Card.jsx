import '../styling/Card.css';
import {motion} from 'framer-motion';


export default function Card({shoe}) {





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