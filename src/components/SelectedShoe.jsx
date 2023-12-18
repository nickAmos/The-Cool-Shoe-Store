import { Link } from 'react-router-dom';
import '../styling/SelectedShoe.css';
import { Button } from 'semantic-ui-react';
import { useEffect, useState } from 'react';

export default function SelectedShoe({shoe}) {



    let copyShoe = shoe;

    const [color6, setColor6] = useState('red');
    const [color65, setColor65] = useState('red');
    const [color7, setColor7] = useState('red');
    const [color75, setColor75] = useState('red');
    const [color8, setColor8] = useState('red');
    const [color85, setColor85] = useState('red');
    const [color9, setColor9] = useState('red');
    const [color95, setColor95] = useState('red');
    const [color10, setColor10] = useState('red');
    const [color105, setColor105] = useState('red');
    const [color11, setColor11] = useState('red');
    const [color115, setColor115] = useState('red');
    const [color12, setColor12] = useState('red');
    const [color125, setColor125] = useState('red');
    const [color13, setColor13] = useState('red');
    const [color135, setColor135] = useState('red');

    const [shoeSize, setShoeSize] = useState(null);




useEffect(() => {
    if (shoeSize === 6) {
        setColor6('green');
    } else {
        setColor6('black');
    }

    if (shoeSize ===6.5) {
       setColor65('grey');    
    }else {
        setColor65('red');
    }

     if (shoeSize === 7) {
        setColor7('grey'); 
    } else {
        setColor7('red');
    }
    
    if (shoeSize ===7.5) {
        setColor75('grey'); 
      
    }  else {
        setColor75('red');
    }


    if (shoeSize === 8) {
        setColor8('grey');  
    } else {
        setColor8('red');
    }

    if (shoeSize ===8.5) {
        setColor85('grey'); 
       
    }  else setColor85('red');


     if (shoeSize === 9) {
        setColor9('grey'); 
        
    }  else setColor9('red');
    
    if (shoeSize === 9.5) {
       setColor95('grey'); 
        
    }  else setColor95('red');


    if (shoeSize === 10) {
       setColor10('grey');     
    } else setColor10('red');
    
    if (shoeSize === 10.5) {
        setColor105('grey'); 
    } else {setColor105('red');}


     if (shoeSize === 11) {
        setColor11('grey'); 
     
    } else setColor11('red');


     if (shoeSize === 11.5) {
        setColor115('grey');  
    } else {setColor115('red');}
    
    
    if (shoeSize === 12) {
     setColor12('grey'); 
         
    }else {setColor12('red');}
    
    
    if (shoeSize === 12.5) {
         setColor125('grey'); 
        
    }  else setColor125('red');
    
    if (shoeSize === 13) {
        setColor13('grey'); 
    }  else {setColor13('red');}
    
    if (shoeSize === 13.5) {
         setColor135('grey'); 
        
    }  else setColor135('red');


    console.log(shoeSize);

}, [shoeSize])
const handlesizechange = (num) => {

    if(num === 6) {
        if (shoeSize !== 6) {
            setShoeSize(6);
        } else if (shoeSize === 6) {
            setShoeSize(null);
        }
    }

    if(num === 6.5) {
        if (shoeSize !== 6.5) {
            setShoeSize(6.5);
        } else if (shoeSize === 6.5) {
            setShoeSize(null);
        }
    }
    if(num === 7) {
        if (shoeSize !== 7) {
            setShoeSize(7);
        } else if (shoeSize === 7) {
            setShoeSize(null);
        }
    }
    if(num === 7.5) {
        if (shoeSize !== 7.5) {
            setShoeSize(7.5);
        } else if (shoeSize === 7.5) {
            setShoeSize(null);
        }
    }
    if(num === 8) {
        if (shoeSize !== 8) {
            setShoeSize(8);
        } else if (shoeSize === 8) {
            setShoeSize(null);
        }
    }
    if(num === 8.5) {
        if (shoeSize !== 8.5) {
            setShoeSize(8.5);
        } else if (shoeSize === 8.5) {
            setShoeSize(null);
        }
    }
    if(num === 9) {
        if (shoeSize !== 9) {
            setShoeSize(9);
        } else if (shoeSize === 9) {
            setShoeSize(null);
        }
    }
    if(num === 9.5) {
        if (shoeSize !== 9.5) {
            setShoeSize(9.5);
        } else if (shoeSize === 9.5) {
            setShoeSize(null);
        }
    }
    if(num === 10) {
        if (shoeSize !== 10) {
            setShoeSize(10);
        } else if (shoeSize === 10) {
            setShoeSize(null);
        }
    }
    if(num === 10.5) {
        if (shoeSize !== 10.5) {
            setShoeSize(10.5);
        } else if (shoeSize === 10.5) {
            setShoeSize(null);
        }
    }
    if(num === 11) {
        if (shoeSize !== 11) {
            setShoeSize(11);
        } else if (shoeSize === 11) {
            setShoeSize(null);
        }
    }
    if(num === 11.5) {
        if (shoeSize !== 11.5) {
            setShoeSize(11.5);
        } else if (shoeSize === 11.5) {
            setShoeSize(null);
        }
    }
    if(num === 12) {
        if (shoeSize !== 12) {
            setShoeSize(12);
        } else if (shoeSize === 12) {
            setShoeSize(null);
        }
    }
    if(num === 12.5) {
        if (shoeSize !== 12.5) {
            setShoeSize(12.5);
        } else if (shoeSize === 12.5) {
            setShoeSize(null);
        }
    }
    if(num === 13) {
        if (shoeSize !== 13) {
            setShoeSize(13);
        } else if (shoeSize === 13) {
            setShoeSize(null);
        }
    }
    if(num === 13.5) {
        if (shoeSize !== 13.5) {
            setShoeSize(13.5);
        } else if (shoeSize === 13.5) {
            setShoeSize(null);
        }
    }
}

    return(
        <>
        <div id='micro-header'>

        </div>
        <div id='main-section'>
            <div id='main-flex-container'>
                <div id='image-section'>
                    <div id='img-container'>image goes here</div>
                    <div id='size-selection'>
                        <div>
        
                        </div>

                        <div id='grid-container-size'>
                            <div><Button basic color={color6} onClick={() => handlesizechange(6)}>6</Button></div>
                            <div><Button basic color={color65} onClick={() => handlesizechange(6.5)}>6.5</Button></div>
                            <div><Button basic color={color7} onClick={() => handlesizechange(7)}>7</Button></div>
                            <div><Button basic color={color75} onClick={() => handlesizechange(7.5)}>7.5</Button></div>
                            <div><Button basic color={color8} onClick={() => handlesizechange(8)}>8</Button></div>
                            <div><Button basic color={color85} onClick={() => handlesizechange(8.5)}>8.5</Button></div>
                            <div><Button basic color={color9} onClick={() => handlesizechange(9)}>9</Button></div>
                            <div><Button basic color={color95} onClick={() => handlesizechange(9.5)}>9.5</Button></div>
                            <div><Button basic color={color10} onClick={() =>  handlesizechange(10)}>10</Button></div>
                            <div><Button basic color={color105} onClick={() => handlesizechange(10.5)}>10.5</Button></div>
                            <div><Button basic color={color11} onClick={() =>  handlesizechange(11)}>11</Button></div>
                            <div><Button basic color={color115} onClick={() => handlesizechange(11.5)}>11.5</Button></div>
                            <div><Button basic color={color12} onClick={() =>  handlesizechange(12)}>12</Button></div>
                            <div><Button basic color={color125} onClick={() => handlesizechange(12.5)}>12.5</Button></div>
                            <div><Button basic color={color13} onClick={() =>  handlesizechange(13)}>13</Button></div>
                            <div><Button basic color={color135} onClick={() => handlesizechange(13.5)}>13.5</Button></div>
                        </div>

                        </div>
                        
                </div>
                <div id='description-section'>
                    <div id='shoe-name'></div>
                    <div id='characteristic-buttons'></div>
                    <div id='description'></div>
                    <div id='checkout'></div>
                </div>
            </div>
    
        </div>
        <p>{copyShoe.brand}</p>
        <p>{copyShoe.name}</p>
        <p>{copyShoe.price}</p>
        <Link to='/'>
            <div>return</div>
        </Link>
        </>
    )
}