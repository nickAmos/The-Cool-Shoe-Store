import { Link } from 'react-router-dom';
import '../styling/SelectedShoe.css';
import { Button, Icon } from 'semantic-ui-react';
import { useEffect, useState } from 'react';

export default function SelectedShoe({shoe, pushCart, cart}) {



    

    const [color6, setColor6] = useState('black');
    const [color65, setColor65] = useState('black');
    const [color7, setColor7] = useState('black');
    const [color75, setColor75] = useState('black');
    const [color8, setColor8] = useState('black');
    const [color85, setColor85] = useState('black');
    const [color9, setColor9] = useState('black');
    const [color95, setColor95] = useState('black');
    const [color10, setColor10] = useState('black');
    const [color105, setColor105] = useState('black');
    const [color11, setColor11] = useState('black');
    const [color115, setColor115] = useState('black');
    const [color12, setColor12] = useState('black');
    const [color125, setColor125] = useState('black');
    const [color13, setColor13] = useState('black');
    const [color135, setColor135] = useState('black');

    const [shoeSize, setShoeSize] = useState(false);
    const [loading, setLoading] = useState(false);


useEffect(() => {
    if (shoeSize === 6) {
        setColor6('orange');
    } else {
        setColor6('black');
    }

    if (shoeSize ===6.5) {
       setColor65('orange');    
    }else {
        setColor65('black');
    }

     if (shoeSize === 7) {
        setColor7('orange'); 
    } else {
        setColor7('black');
    }
    
    if (shoeSize ===7.5) {
        setColor75('orange'); 
      
    }  else {
        setColor75('black');
    }


    if (shoeSize === 8) {
        setColor8('orange');  
    } else {
        setColor8('black');
    }

    if (shoeSize ===8.5) {
        setColor85('orange'); 
       
    }  else setColor85('black');


     if (shoeSize === 9) {
        setColor9('orange'); 
        
    }  else setColor9('black');
    
    if (shoeSize === 9.5) {
       setColor95('orange'); 
        
    }  else setColor95('black');


    if (shoeSize === 10) {
       setColor10('orange');     
    } else setColor10('black');
    
    if (shoeSize === 10.5) {
        setColor105('orange'); 
    } else {setColor105('black');}


     if (shoeSize === 11) {
        setColor11('orange'); 
     
    } else setColor11('black');


     if (shoeSize === 11.5) {
        setColor115('orange');  
    } else {setColor115('black');}
    
    
    if (shoeSize === 12) {
     setColor12('orange'); 
         
    }else {setColor12('black');}
    
    
    if (shoeSize === 12.5) {
         setColor125('orange'); 
        
    }  else setColor125('black');
    
    if (shoeSize === 13) {
        setColor13('orange'); 
    }  else {setColor13('black');}
    
    if (shoeSize === 13.5) {
         setColor135('orange'); 
        
    }  else setColor135('black');


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

const [trolleyColor, setTrolleyColor] = useState('black');


function addToCart() {
    let uniqueshoe = {...shoe, id: crypto.randomUUID(), size: shoeSize}
    console.log(uniqueshoe);
    pushCart(uniqueshoe);
}

function loader() {

    addToCart();

    setLoading(true);

    setTimeout(() => {
        setLoading(false);
    },1000)

    setTimeout(() => {
        setTrolleyColor('orange');
    },1000 )
    setTimeout(() => {
        setTrolleyColor('black');
    },1700 )

}

    return(
        <>
        <div id='main-section'>
            <div id='main-flex-container'>
                <div id='image-section'>
                    <div id='img-container'>image goes here</div>
                    <div id='size-selection'>
                        

                        <div id='grid-container-size'>
                            <div id='button-div'><Button id='button-div-button'  basic  color={color6} onClick={() => handlesizechange(6)}><p>6</p></Button></div>
                            <div id='button-div'><Button id='button-div-button' basic color={color65} onClick={() => handlesizechange(6.5)}><p>6.5</p></Button></div>
                            <div id='button-div'><Button id='button-div-button' basic color={color7} onClick={() => handlesizechange(7)}><p>7</p></Button></div>
                            <div id='button-div'><Button id='button-div-button' basic color={color75} onClick={() => handlesizechange(7.5)}><p>7.5</p></Button></div>
                            <div id='button-div'><Button id='button-div-button' basic color={color8} onClick={() => handlesizechange(8)}><p>8</p></Button></div>
                            <div id='button-div'><Button id='button-div-button' basic color={color85} onClick={() => handlesizechange(8.5)}><p>8.5</p></Button></div>
                            <div id='button-div'><Button id='button-div-button' basic color={color9} onClick={() => handlesizechange(9)}><p>9</p></Button></div>
                            <div id='button-div'><Button id='button-div-button' basic color={color95} onClick={() => handlesizechange(9.5)}><p>9.5</p></Button></div>
                            <div id='button-div'><Button id='button-div-button' basic color={color10} onClick={() =>  handlesizechange(10)}><p>10</p></Button></div>
                            <div id='button-div'><Button id='button-div-button' basic color={color105} onClick={() => handlesizechange(10.5)}><p>10.5</p></Button></div>
                            <div id='button-div'><Button id='button-div-button' basic color={color11} onClick={() =>  handlesizechange(11)}><p>11</p></Button></div>
                            <div id='button-div'><Button id='button-div-button'  basic color={color115} onClick={() => handlesizechange(11.5)}><p>11.5</p></Button></div>
                            <div id='button-div'><Button id='button-div-button' basic color={color12} onClick={() =>  handlesizechange(12)}><p>12</p></Button></div>
                            <div id='button-div'><Button id='button-div-button' basic color={color125} onClick={() => handlesizechange(12.5)}><p>12.5</p></Button></div>
                            <div id='button-div'><Button id='button-div-button' basic color={color13} onClick={() =>  handlesizechange(13)}><p>13</p></Button></div>
                            <div id='button-div'><Button id='button-div-button' basic color={color135} onClick={() => handlesizechange(13.5)}><p>13.5</p></Button></div>
                        </div>

                        </div>
                        
                </div>
                <div id='description-section'>
                    <div id='shoe-name'><h1>{shoe.name}</h1><h2>${shoe.price}.00 AUD</h2></div>
                    <div id='characteristic-buttons'><Button circular compact color='orange'>{shoe.type}</Button></div>
                    <div id='description'><p>{shoe.description}</p></div>
                    <div id='checkout'>
                        <div id='checkout-flex-container'>
                            <div id='add-container'>
                                <Button id='size-button' size='massive' disabled={!shoeSize} loading={loading} onClick={() => loader()} >{shoeSize > 0 ? <div id='checkout-div'><p>Add size: {shoeSize} to cart</p></div> : <div id='checkout-div'><p><Icon name='caret square left outline'/>Select size</p></div>}</Button>
                            </div>

                            <div id='twobutton-container'>

                            <div>
                                <Link to='/'>
                                <Button id="continue-shopping" basic color='black'>Continue shopping</Button>
                                </Link>
                            </div>

                            <div>
                                <Link to='/checkout'>
                                    <Button basic color={trolleyColor} animated='vertical'>
                                        <div id='checkout-button'>
                                            <Button.Content visible>
                                            <Icon.Group>
                                                <Icon size='big'  id='shopping-trolley' name='shop'/>
                                                <Icon corner='top right'><Button id='cartcounter' circular compact color='orange' size='mini' >{cart.length}</Button></Icon>
                                            </Icon.Group>
                                            </Button.Content>
                                            
                                            <Button.Content hidden>
                                                <p>Checkout</p>
                                            </Button.Content>
                                            
                                        </div>
                                    </Button>
                                </Link>
                            </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
        </div>
        </>
    )
}