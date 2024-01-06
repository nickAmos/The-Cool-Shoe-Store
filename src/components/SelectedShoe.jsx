import { Link } from 'react-router-dom';
import '../styling/SelectedShoe.css';
import { Button, Icon, RevealContent, Reveal } from 'semantic-ui-react';
import { useEffect, useState} from 'react';
import RevealMine from './Reveal';
import Card from './Card';
import { NikeShoes, SaucShoes, AdidasShoes } from '../Shoes';
import { motion } from "framer-motion";




export default function SelectedShoe({shoe, pushCart, cart, changeShoe}) {

    const shoeName = shoe.name;
    const brand = shoe.brand;

    const filteredNike = NikeShoes.filter((shoe) => shoe.name !== shoeName);
    const filteredSauc = SaucShoes.filter((shoe) => shoe.name !== shoeName);
    const filteredAdidas = AdidasShoes.filter((shoe) => shoe.name !== shoeName);

    let threeShoes = [];

    let num1 = Math.floor(Math.random() * 6);
    let num2 = 0;
    let num3 = 0;


    function Gen3Num() {
        while (true) {
            num2 = Math.floor(Math.random() * 6);
            if (num1 !== num2) {
                break;
            }
        }
        while (true) {
            num3 = Math.floor(Math.random() * 6);
            if ((num3 !== num2) && (num3 !== num1)) {
                break;
            }
        }
        console.log(num1, num2, num3);
    }



    Gen3Num();

    function fillArray () {

   
        if (brand === 'Nike') {
            threeShoes.push(filteredNike[num1]);
            threeShoes.push(filteredNike[num2]);
            threeShoes.push(filteredNike[num3]);
        }

        if (brand === 'Adidas') {
            threeShoes.push(filteredAdidas[num1]);
            threeShoes.push(filteredAdidas[num2]);
            threeShoes.push(filteredAdidas[num3]);
        }

        if (brand === 'Saucony') {
            threeShoes.push(filteredSauc[num1]);
            threeShoes.push(filteredSauc[num2]);
            threeShoes.push(filteredSauc[num3]);
        }

        console.log(threeShoes[0]['name']);
        console.log(threeShoes[1]['name']);
        console.log(threeShoes[2]['name']);

}

    fillArray();






    const [color6, setColor6] = useState('grey');
    const [color65, setColor65] = useState('grey');
    const [color7, setColor7] = useState('grey');
    const [color75, setColor75] = useState('grey');
    const [color8, setColor8] = useState('grey');
    const [color85, setColor85] = useState('grey');
    const [color9, setColor9] = useState('grey');
    const [color95, setColor95] = useState('grey');
    const [color10, setColor10] = useState('grey');
    const [color105, setColor105] = useState('grey');
    const [color11, setColor11] = useState('grey');
    const [color115, setColor115] = useState('grey');
    const [color12, setColor12] = useState('grey');
    const [color125, setColor125] = useState('grey');
    const [color13, setColor13] = useState('grey');
    const [color135, setColor135] = useState('grey');

    const [shoeSize, setShoeSize] = useState(false);
    const [loading, setLoading] = useState(false);

    const [footer, setFooter] = useState(false);

    const [checkoutButtontxt, setCheckoutButtontxt] = useState(true);

    const [scale, setScale] = useState(1);
    const [rotate, setRotate] = useState(0);


    const openFooter = () => {
        
        setFooter(true);
        setTimeout(() => {
            window.scrollTo({ top: 500, behavior: "smooth" })
        }, 0)
    }

    const closeFooter = () => {
        setTimeout(() => {
            window.scrollTo({ top: -500, behavior: "smooth" })
        }, 0)

        setTimeout(() => {
            setFooter(false);
        }, 500)
    }


useEffect(() => {
    if (shoeSize === 6) {
        setColor6('black');
    } else {
        setColor6('grey');
    }

    if (shoeSize ===6.5) {
       setColor65('black');    
    }else {
        setColor65('grey');
    }

     if (shoeSize === 7) {
        setColor7('black'); 
    } else {
        setColor7('grey');
    }
    
    if (shoeSize ===7.5) {
        setColor75('black'); 
      
    }  else {
        setColor75('grey');
    }


    if (shoeSize === 8) {
        setColor8('black');  
    } else {
        setColor8('grey');
    }

    if (shoeSize ===8.5) {
        setColor85('black'); 
       
    }  else setColor85('grey');


     if (shoeSize === 9) {
        setColor9('black'); 
        
    }  else setColor9('grey');
    
    if (shoeSize === 9.5) {
       setColor95('black'); 
        
    }  else setColor95('grey');


    if (shoeSize === 10) {
       setColor10('black');     
    } else setColor10('grey');
    
    if (shoeSize === 10.5) {
        setColor105('black'); 
    } else {setColor105('grey');}


     if (shoeSize === 11) {
        setColor11('black'); 
     
    } else setColor11('grey');


     if (shoeSize === 11.5) {
        setColor115('black');  
    } else {setColor115('grey');}
    
    
    if (shoeSize === 12) {
     setColor12('black'); 
         
    }else {setColor12('grey');}
    
    
    if (shoeSize === 12.5) {
         setColor125('black'); 
        
    }  else setColor125('grey');
    
    if (shoeSize === 13) {
        setColor13('black'); 
    }  else {setColor13('grey');}
    
    if (shoeSize === 13.5) {
         setColor135('black'); 
        
    }  else setColor135('grey');


}, [shoeSize])
const handlesizechange = (num) => {

    if(num === 6) {
        if (shoeSize !== 6) {
            setShoeSize(6);
        } else if (shoeSize === 6) {
            setShoeSize(false);
        }
    }

    if(num === 6.5) {
        if (shoeSize !== 6.5) {
            setShoeSize(6.5);
        } else if (shoeSize === 6.5) {
            setShoeSize(false);
        }
    }
    if(num === 7) {
        if (shoeSize !== 7) {
            setShoeSize(7);
        } else if (shoeSize === 7) {
            setShoeSize(false);
        }
    }
    if(num === 7.5) {
        if (shoeSize !== 7.5) {
            setShoeSize(7.5);
        } else if (shoeSize === 7.5) {
            setShoeSize(false);
        }
    }
    if(num === 8) {
        if (shoeSize !== 8) {
            setShoeSize(8);
        } else if (shoeSize === 8) {
            setShoeSize(false);
        }
    }
    if(num === 8.5) {
        if (shoeSize !== 8.5) {
            setShoeSize(8.5);
        } else if (shoeSize === 8.5) {
            setShoeSize(false);
        }
    }
    if(num === 9) {
        if (shoeSize !== 9) {
            setShoeSize(9);
        } else if (shoeSize === 9) {
            setShoeSize(false);
        }
    }
    if(num === 9.5) {
        if (shoeSize !== 9.5) {
            setShoeSize(9.5);
        } else if (shoeSize === 9.5) {
            setShoeSize(false);
        }
    }
    if(num === 10) {
        if (shoeSize !== 10) {
            setShoeSize(10);
        } else if (shoeSize === 10) {
            setShoeSize(false);
        }
    }
    if(num === 10.5) {
        if (shoeSize !== 10.5) {
            setShoeSize(10.5);
        } else if (shoeSize === 10.5) {
            setShoeSize(false);
        }
    }
    if(num === 11) {
        if (shoeSize !== 11) {
            setShoeSize(11);
        } else if (shoeSize === 11) {
            setShoeSize(false);
        }
    }
    if(num === 11.5) {
        if (shoeSize !== 11.5) {
            setShoeSize(11.5);
        } else if (shoeSize === 11.5) {
            setShoeSize(false);
        }
    }
    if(num === 12) {
        if (shoeSize !== 12) {
            setShoeSize(12);
        } else if (shoeSize === 12) {
            setShoeSize(false);
        }
    }
    if(num === 12.5) {
        if (shoeSize !== 12.5) {
            setShoeSize(12.5);
        } else if (shoeSize === 12.5) {
            setShoeSize(false);
        }
    }
    if(num === 13) {
        if (shoeSize !== 13) {
            setShoeSize(13);
        } else if (shoeSize === 13) {
            setShoeSize(false);
        }
    }
    if(num === 13.5) {
        if (shoeSize !== 13.5) {
            setShoeSize(13.5);
        } else if (shoeSize === 13.5) {
            setShoeSize(false);
        }
    }
}

function addToCart() {
    let uniqueshoe = {...shoe, id: crypto.randomUUID(), size: shoeSize}
    pushCart(uniqueshoe);
}

function loader() {


    setLoading(true);

    setTimeout(() => {
        addToCart();
        setCheckoutButtontxt(false);
        setLoading(false);
        setScale(1.2);
        setRotate(-10);
    },1000)

    setTimeout(() => {
        setRotate(8);

    },1500)

    setTimeout(() => {

        setShoeSize(false);
        setCheckoutButtontxt(true);
        setScale(1);
        setRotate(0);

    },2000)





    

   

}

function handleShoeChange(newShoe) {
    changeShoe(newShoe);
    window.scrollTo({ top: 0, behavior: "smooth" });

    setTimeout(() => {
        setFooter(false);
    },1000);

}

    return(
        <>
        <div id='selected-header'>
            <div id='header-flex-child'>
                <h2 id='TTS'>TTS</h2>
            </div>
        </div>
        <div id='main-section'>
            <div id='main-flex-container'>
                <div id='image-section'>
                    <div id='img-container'>
                     <Button id='shoetype-button' circular compact >{shoe.type}</Button>
                     <div id='img-placeholder'></div>
                    </div>
                    <div id='size-selection'>
                        

                        <div id='grid-container-size'>
                            <div id='button-div'><Button id='button-div-button'  basic  color={color6} onClick={() => handlesizechange(6)}><p>6 AU</p></Button></div>
                            <div id='button-div'><Button id='button-div-button' basic color={color65} onClick={() => handlesizechange(6.5)}><p>6.5 AU</p></Button></div>
                            <div id='button-div'><Button id='button-div-button' basic color={color7} onClick={() => handlesizechange(7)}><p>7 AU</p></Button></div>
                            <div id='button-div'><Button id='button-div-button' basic color={color75} onClick={() => handlesizechange(7.5)}><p>7.5 AU</p></Button></div>
                            <div id='button-div'><Button id='button-div-button' basic color={color8} onClick={() => handlesizechange(8)}><p>8 AU</p></Button></div>
                            <div id='button-div'><Button id='button-div-button' basic color={color85} onClick={() => handlesizechange(8.5)}><p>8.5 AU</p></Button></div>
                            <div id='button-div'><Button id='button-div-button' basic color={color9} onClick={() => handlesizechange(9)}><p>9 AU</p></Button></div>
                            <div id='button-div'><Button id='button-div-button' basic color={color95} onClick={() => handlesizechange(9.5)}><p>9.5 AU</p></Button></div>
                            <div id='button-div'><Button id='button-div-button' basic color={color10} onClick={() =>  handlesizechange(10)}><p>10 AU</p></Button></div>
                            <div id='button-div'><Button id='button-div-button' basic color={color105} onClick={() => handlesizechange(10.5)}><p>10.5 AU</p></Button></div>
                            <div id='button-div'><Button id='button-div-button' basic color={color11} onClick={() =>  handlesizechange(11)}><p>11 AU</p></Button></div>
                            <div id='button-div'><Button id='button-div-button'  basic color={color115} onClick={() => handlesizechange(11.5)}><p>11.5 AU</p></Button></div>
                            <div id='button-div'><Button id='button-div-button' basic color={color12} onClick={() =>  handlesizechange(12)}><p>12 AU</p></Button></div>
                            <div id='button-div'><Button id='button-div-button' basic color={color125} onClick={() => handlesizechange(12.5)}><p>12.5 AU</p></Button></div>
                            <div id='button-div'><Button id='button-div-button' basic color={color13} onClick={() =>  handlesizechange(13)}><p>13 AU</p></Button></div>
                            <div id='button-div'><Button id='button-div-button' basic color={color135} onClick={() => handlesizechange(13.5)}><p>13.5 AU</p></Button></div>
                        </div>

                        </div>
                        
                </div>
                <div id='description-section'>
                    <div id='shoe-name'><h1>{shoe.name}</h1><h2>${shoe.price}.00 AUD</h2></div>
                    <div id='description'><p>{shoe.description}</p></div>
                    <div id='checkout'>
                        <div id='checkout-flex-container'>
                            <div id='add-container'>
                                {shoeSize ? <Button id='size-button' loading={loading} onClick={() => loader()} ><div id='checkout-div'>{checkoutButtontxt ? <p id='checkout-text'>Add size: {shoeSize} to cart</p> : <p id='checkout-text'>{shoeSize} added to cart</p> }</div></Button>
                                : <div id='size-button-alt' >
                                        <RevealMine posX={100} delay={0.7} id='reveal-div-size'>
                                            
                                                <Icon id='angle-double-left' name='angle double left'/>
                                                <p id='angle-double-left-txt'>Select Size</p>
                                            
                                        </RevealMine>
                                    </div>}
                            </div>

                            <div id='twobutton-container'>

                            <div>
                                <Link to='/'>
                                <Button id="continue-shopping" basic color='black'><p  id='checkout-text'>Continue shopping</p></Button>
                                </Link>
                            </div>

                            <div>
                                <Link to='/checkout'>
                                    <Button basic color='black' animated='vertical'>
                                        <motion.div id='checkout-button' initial={{ scale: 0 }}
                                                animate={{ scale: scale, rotate: rotate }}
                                                transition={{
                                                type: "spring",
                                                stiffness: 260,
                                                damping: 20
                                                }}>
                                            <Button.Content visible>
                                            <Icon.Group>
                                                <Icon size='big' color='black'  id='shopping-trolley' name='shop'/>
                                                <Icon corner='top right'><Button id='cartcounter' circular compact size='mini' >{cart.length}</Button></Icon>
                                            </Icon.Group>
                                            </Button.Content>
                                            
                                            <Button.Content hidden>
                                                {cart.length > 0 ? <p  id='checkout-text'>Checkout</p> : <p id='checkout-text'>Cart Empty</p>}
                                            </Button.Content>
                                            
                                        </motion.div>
                                    </Button>
                                </Link>
                            </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
        </div>

        <div id='selected-footer'>

            {!footer ? 
             <div id='reveal-wrapper' onClick={() => openFooter()}>
             <Reveal id="reveal" animated='fade'>
                 <RevealContent id='revealContent' visible>
                     <div id='see-more-flex-child'>
                         <div id='left-border'></div>
                         <div id='middle-content'>
                             <p>See more from {shoe.brand}</p>
                         </div>
                         <div id='right-border'></div>
                     </div>
                 </RevealContent>
                 <RevealContent id='revealContent' hidden>
                     <div id='hidden-content'>
                         <Icon id='angle-down' name='angle down' size='large' />
                     </div>
                 </RevealContent>
             </Reveal>
         </div>
            : 
            
            <div id='reveal-wrapper' onClick={() => closeFooter()}>
             <div id='hidden-content'>
                         <Icon id='angle-up' name='angle up' size='large' />
                     </div>
         </div>}
           
        </div>
        {footer ? 
        <div id='extended-footer'>

            

            <div id='card-container'>

                <div id='card-child' onClick={() => handleShoeChange(threeShoes[0])}>
                    <RevealMine  posY={200} delay={0.5}>
                        <Card shoe={threeShoes[0]} />
                    </RevealMine>
                </div>
                <div id='card-child' onClick={() => handleShoeChange(threeShoes[1])}>
                    <RevealMine posY={200} delay={0.8}>
                        <Card shoe={threeShoes[1]}/>
                    </RevealMine>
                </div>
                <div id='card-child' onClick={() => handleShoeChange(threeShoes[2])}>
                    <RevealMine posY={200} delay={1.1}>
                        <Card shoe={threeShoes[2]}/>
                    </RevealMine>
                </div>
            </div>
              
            

            

        </div>
        
        : null}
        </>
    )
}





/* <div id='see-more-flex-child'>
                <div id='left-border'></div>
                <div id='middle-content'>
                    <p>See more from {shoe.brand}</p>
                </div>
                <div id='right-border'></div>
            </div> */