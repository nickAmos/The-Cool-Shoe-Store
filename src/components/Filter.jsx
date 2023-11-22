import { shoes } from "../Shoes";
import { useEffect, useState} from "react";
import '../styling/Filter.css';
import { Button, Label, Input } from 'semantic-ui-react';


export default function Filter({onSubmit, onClose}) {

  const handleSubmit = (data) => {
    onSubmit(data);
  }

   
    const [brand, setBrand] = useState(null);
    const [type, setType] = useState(null);
    const [maxPrice, setMaxPrice] = useState(null);

    const [nikeColor, setNikeColor] = useState('black')
    const [adidasColor, setAdidasColor] = useState('black')
    const [saucanyColor, setSaucanyColor] = useState('black')
    const [dailyColor, setDailyColor] = useState('black');
    const [raceColor, setRaceColor] = useState('black');
    const [disabled, setDisabled] = useState(null);

  useEffect(() => {
    if (brand === 'Nike') {
      setNikeColor('green')
    }else {
        setNikeColor('black');
      }

    if (brand === 'Saucany') {
      setSaucanyColor('green');
    } else {
      setSaucanyColor('black');
    }

     if (brand === 'Adidas') {
      setAdidasColor('green');
    } else {
      setAdidasColor('black');
    }
  },[brand])

  useEffect(() => {
    if (type === 'Daily Trainer') {
      setDailyColor('green')
    }else {
        setDailyColor('black');
      }

    if (type === 'Race Shoe') {
      setRaceColor('green');
    } else {
      setRaceColor('black');
    }
  },[type])

  useEffect(() => {
    if (maxPrice < 0 || maxPrice > 1000) {
      setDisabled(true);
    } else if (maxPrice > 0 && maxPrice < 1001) {
      setDisabled(false);
    }

  }, [maxPrice])

    const filterShoes = (brand, color, maxPrice) => {
      let filtered = shoes;
  
      if (brand) {
        filtered = filtered.filter((shoe) => shoe.brand === brand);
      }
  
      if (type) {
        filtered = filtered.filter((shoe) => shoe.type === color);
      }
  
      if (maxPrice) {
        filtered = filtered.filter((shoe) => shoe.price <= maxPrice);
      }

      console.log(`Brand: ${brand}, Type: ${type}, max price: ${maxPrice}`)

      handleSubmit(filtered);
     
    };

    const handelNike = () => {
      if (brand !== 'Nike') {
        setBrand('Nike');

      } else if (brand === 'Nike') {
        setBrand(null);
      }
    }

    const handelAdidas = () => {
      if (brand !== 'Adidas') {
        setBrand('Adidas');

      } else if (brand === 'Adidas') {
        setBrand(null);
      }
    };

    const handelSaucany = () => {
      if (brand !== 'Saucany') {
        setBrand('Saucany');

      } else if (brand === 'Saucany') {
        setBrand(null);
      }
    };

    const handelDaily = () => {
      if (type !== 'Daily Trainer') {
        setType('Daily Trainer') 
      } else if (type === 'Daily Trainer') {
        setType(null);
      }
    }; 

    const handelRace = () => {
      if (type !== 'Race Shoe') {
        setType('Race Shoe') 
      } else if (type === 'Race Shoe') {
        setType(null);
      }
    }
  

    // Example: Filter by Nike, Blue color, and max price of 400
   


    return(
      <>
        <div id="title-container">
            <h1>Refine your choice.</h1>
         </div>
      <div id="filter-container-flex-controller">
        <div id="filter-container">

          <div id="flex-child-buttons">
            <div id="button-container">
                <Button basic color={nikeColor}  onClick={() => handelNike()}>Nike</Button>
                
            </div>

            <div id="button-container">
              <Button basic color={adidasColor} onClick={() => handelAdidas()}>Adidas </Button>
              
            </div>

            <div id="button-container">
              <Button basic color={saucanyColor} onClick={() => handelSaucany()}>Saucany </Button>
              
            </div>
        </div>

        <div id="flex-child-buttons">
          <div id="button-container">
              <Button Button basic color={dailyColor} onClick={() => handelDaily()}>Daily Trainer</Button>
              
          </div>
          <div id="button-container">
            <Button id="test" Button basic color={raceColor} onClick={() => handelRace()}>Race Shoe</Button>

          </div>
        </div>

        <div id="flex-child-price">
          {disabled ? <Label basic color='red' pointing='below'>Please enter a value between 0 - 1000</Label> : null}
            <Input error={disabled} labelPosition='right' type='number'>
            {disabled ? <Label color="red" basic>$</Label> : <Label  basic>$</Label> }
              <input  placeholder="max price" onChange={(e) => setMaxPrice(e.target.value)} />
            {disabled ? <Label basic color="red">.00</Label> : <Label >.00</Label> }
          </Input>
        </div>

          <div id="flex-child-search">
            {((brand === null && type === null && maxPrice === null) || disabled) ? <Button disabled> Search </Button> :<Button color="teal"  onClick={() => {filterShoes(brand, type, maxPrice)
            onClose();
            }}>Search</Button>}
          </div>

        </div>
        </div>

        </>
        
    )

}



/* to send filtered object to APP():

<input type="text" placeholder="max price" onChange={(e) => setMaxPrice(e.target.value)}/>

<Button  onClick={() => {filterShoes(brand, type, maxPrice)
        onClose();
        }}>Filter</Button>

https://www.youtube.com/watch?v=fGaEOESdPVI&ab_channel=IndianCoders



Future: 
    assesibly way to clear filters (done)


*/