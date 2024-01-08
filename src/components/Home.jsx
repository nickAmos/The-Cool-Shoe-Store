
import Header from './Header';
import ShoeDisplay from './ShoeDisplay';
import { useState } from 'react';
import { shoes } from '../Shoes';
import '../styling/Home.css';
import {motion} from 'framer-motion';
import RevealMine from './Reveal';
import { Icon } from 'semantic-ui-react';

export default function Home({changeShoe, cart, filterCart, subtotal}) {

    const [includedShoes, setIncludedShoes] = useState(shoes)
    const [copied, setCopied] = useState(false);

  const getDataApp = (data) => {
    setIncludedShoes(data);
  }

  function getEmail() {
    let copyEmail = document.getElementById('email').innerHTML;
    console.log(copyEmail);
    navigator.clipboard.writeText(copyEmail);
    
    setTimeout(() => {
      setCopied(true);
    },0)

    setTimeout(() => {
      setCopied(false);
    },2000)

   
  }

    return (
        <>
        <Header cart={cart} changeShoe={changeShoe} getDataApp={getDataApp} filterCart={filterCart} subtotal={subtotal}/>
        <ShoeDisplay changeShoe={changeShoe} includedShoes={includedShoes} getDataApp/>
        <div id='coming-soon-container'>
          <RevealMine posY={200} delay={0.6}>
            <motion.div id='coming-soon-txt'
            animate={{
              y: [0, 30, 0],
              rotate:[-3, 3, -3]
            }}
            transition={{
              duration: 3,
              ease: "easeInOut",
              times: [0, 0.5, 1],
              repeat: Infinity,
              repeatDelay: 0
            }}
            >
              <p>More shoes coming soon...</p>
            </motion.div>
          </RevealMine>
        </div>
        <footer>
            <div id='footer-flex'>
              <div id='contact-container'>
                <div id='social-icons'><Icon name='github'/><a href="https://github.com/nickAmos" target='_blank'>Github</a></div>
              </div>
              <div id='contact-container'>
              <div id='social-icons'><Icon name='linkedin'/><a href="https://www.linkedin.com/in/nick-amos-2a2688247/" target="_blank">LinkedIn</a></div>
              </div>
              <div id='contact-container'>
                {copied ? <div id='copied'>
                  <p>Copied!</p>
                  <div id='copied-container'>
                      <Icon name='copy'/>
                    </div>
                </div> :null}
                <div onClick={() => getEmail()} id='social-icons'>
                  <Icon name='mail'/><p id='email'>nick.amos2000@gmail.com</p>
                  </div>
              </div>
            </div>
        </footer>
        </>
    )
}