import { shoes } from "../Shoes";
import { useState} from "react";
import '../styling/Filter.css';


export default function Filter({onSubmit}) {

  const handleSubmit = (data) => {
    onSubmit(data);
  }

    const [filteredShoes, setFilteredShoes] = useState(shoes);
    const [brand, setBrand] = useState(null);
    const [type, setType] = useState(null);
    const [maxPrice, setMaxPrice] = useState(null);

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

          <div id="flex-child">
            <div id="button-container">
                <button  onClick={() => {setBrand("Nike")}}>Set nike</button>
                {brand === 'Nike' ? <div id="green"></div> : <div id="red"></div>}
            </div>

            <div id="button-container">
              <button onClick={() => {
                  setBrand("Adidas");
              }}>Set Adidas </button>
              {brand === 'Adidas' ? <div id="green"></div> : <div id="red"></div>}
            </div>

            <div id="button-container">
              <button onClick={() => {
                  setBrand("Saucany");
              }}>Set Saucany </button>
              {brand === 'Saucany' ? <div id="green"></div> : <div id="red"></div>}
            </div>
        </div>

        <div id="flex-child">
          <input type="text" placeholder="max price" onChange={(e) => setMaxPrice(e.target.value)}/>
        </div>

        <div id="flex-child">
          <button onClick={() => { setType("Daily Trainer")}}>Daily Trainer</button>
          <button onClick={() => { setType("Race Shoe")}}>Race Shoe</button>
        </div>

        <button  onClick={() => {filterShoes(brand, type, maxPrice)}}>Filter</button>
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