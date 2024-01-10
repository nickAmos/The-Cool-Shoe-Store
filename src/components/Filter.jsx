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
    

    const [disabled, setDisabled] = useState(null);


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

    const handelSaucony = () => {
      if (brand !== 'Saucony') {
        setBrand('Saucony');

      } else if (brand === 'Saucony') {
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

    const handelBoth = () => {
      if (type !== 'Both') {
        setType('Both') 
      } else if (type === 'Both') {
        setType(null);
      }
    }
  

    // Example: Filter by Nike, Blue color, and max price of 400
   


    return(
      <>
        <div id="title-container">
            <h1>Refine your choice</h1>
            <div id="line-break"></div>
         </div>
      <div id="filter-container-flex-controller">
        <div id="brand-type-spllit">

        <div id="brand-container">

          <div id="description-container">
              <p>Brand</p>
          </div>
          <div id="flex-child-buttons">
            <div id="button-container-filter">
                {(brand === 'Nike') ? 
                <Button id="checked-button"  onClick={() => handelNike()}>Nike</Button> 
                :
                <Button id="unchecked-button"  onClick={() => handelNike()}>Nike</Button> }
            </div>

            <div id="button-container-filter">
                {(brand === 'Adidas') ? 
                <Button id="checked-button"  onClick={() => handelAdidas()}>Adidas</Button> 
                :
                <Button id="unchecked-button"  onClick={() => handelAdidas()}>Adidas</Button> }
            </div>

            <div id="button-container-filter">
                {(brand === 'Saucony') ? 
                <Button id="checked-button"  onClick={() => handelSaucony()}>Saucony</Button> 
                :
                <Button id="unchecked-button"  onClick={() => handelSaucony()}>Saucony</Button> }
            </div>

        </div>
        </div>

  
        
        <div id="type-container">
        <div id="description-container">
              <p>Type</p>
          </div>
        <div id="flex-child-buttons">
          <div id="button-container-filter">
            {(type === "Daily Trainer") ?
             <Button id="checked-button" onClick={() => handelDaily()}>Daily Trainer</Button>
             : 
            <Button id="unchecked-button" onClick={() => handelDaily()}>Daily Trainer</Button>
             }
             
              
          </div>
          <div id="button-container-filter">
            {(type === "Race Shoe") ? 
            <Button id="checked-button" onClick={() => handelRace()}>Race Shoe</Button>
            :
            <Button id="unchecked-button" onClick={() => handelRace()}>Race Shoe</Button>
            }
            

          </div>

          <div id="button-container-filter">
            {(type === "Both") ? 
            <Button id="checked-button" onClick={() => handelBoth()}>Both</Button>
            :
            <Button id="unchecked-button" onClick={() => handelBoth()}>Both</Button>
            }
            

          </div>
        
        </div>
        </div>

        
        </div>
        <div id="title-container">
            <h1>Select price point</h1>
            <div id="line-break"></div>
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
            {((brand === null && type === null && maxPrice === null) || disabled) ? <Button disabled id="unchecked-button-search"> Search </Button> :<Button id="checked-button-search"  onClick={() => {filterShoes(brand, type, maxPrice)
            onClose();
            }}>Search</Button>}
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