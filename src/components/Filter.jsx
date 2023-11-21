import { shoes } from "../Shoes";
import { useEffect, useState} from "react";
import '../styling/Filter.css';
import { Button } from 'semantic-ui-react';


export default function Filter({onSubmit, onClose}) {

  const handleSubmit = (data) => {
    onSubmit(data);
  }

    const [filteredShoes, setFilteredShoes] = useState(shoes);
    const [brand, setBrand] = useState(null);
    const [type, setType] = useState(null);
    const [maxPrice, setMaxPrice] = useState(null);

    const [nikeColor, setNikeColor] = useState('black')
    const [adidasColor, setAdidasColor] = useState('black')
    const [saucanyColor, setSaucanyColor] = useState('black')

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
  

    // Example: Filter by Nike, Blue color, and max price of 400
   


    return(
      
        <div id="filter-container">

          <div id="flex-child-buttons">
            <div id="button-container">
                <Button basic color={nikeColor}  onClick={() => {setBrand("Nike")}}>Nike</Button>
                
            </div>

            <div id="button-container">
              <Button basic color={adidasColor} onClick={() => {
                  setBrand("Adidas");
              }}>Adidas </Button>
              
            </div>

            <div id="button-container">
              <Button basic color={saucanyColor} onClick={() => {
                  setBrand("Saucany");
              }}>Saucany </Button>
              
            </div>
        </div>

        <div id="flex-child">
          <input type="text" placeholder="max price" onChange={(e) => setMaxPrice(e.target.value)}/>
        </div>

        <div id="flex-child">
          <div id="button-container">
              <button onClick={() => { setType("Daily Trainer")}}>Daily Trainer</button>
              
          </div>
          <div id="button-container">
            <button onClick={() => { setType("Race Shoe")}}>Race Shoe</button>

          </div>
        </div>

        <button  onClick={() => {filterShoes(brand, type, maxPrice)
        onClose();
        }}>Filter</button>
        </div>
        
    )

}



/* to send filtered object to APP():

type="submit" onSubmit={handleSubmit}

https://www.youtube.com/watch?v=fGaEOESdPVI&ab_channel=IndianCoders

filter button will set the brand, price and type (yet to be added) of the filter function,
these will be chosen prior by the buttons / inputs. 
this filtered array will be sent to the App() component and then passed to
the shoe display component. 

Future: 
    assesibly way to clear filters
*/