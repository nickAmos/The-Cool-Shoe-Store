import { shoes } from "../Shoes";
import { useState} from "react";


export default function Filter() {

    const [filteredShoes, setFilteredShoes] = useState(shoes);
    const [brand, setBrand] = useState(null);
    const [color, setColor] = useState(null);
    const [maxPrice, setMaxPrice] = useState(null);

    const filterShoes = (brand, color, maxPrice) => {
      let filtered = shoes;
  
      if (brand) {
        filtered = filtered.filter((shoe) => shoe.brand === brand);
      }
  
      if (color) {
        filtered = filtered.filter((shoe) => shoe.color === color);
      }
  
      if (maxPrice) {
        filtered = filtered.filter((shoe) => shoe.price <= maxPrice);
      }
  
      setFilteredShoes(filtered);
    };
  
    console.log(filteredShoes);
    // Example: Filter by Nike, Blue color, and max price of 400
   


    return(
        <>
        <button onClick={() => {
            setBrand("Nike");
        }}>Set nike</button>
        <button onClick={() => {
            setBrand("Adidas");
        }}>Set Adidas </button>
        <button onClick={() => {
            setBrand("Saucany");
        }}>Set Saucany </button>

        <input type="text" placeholder="max price" onChange={(e) => setMaxPrice(e.target.value)}/>
        <button onClick={() => {filterShoes(brand, color, maxPrice)}}>Filter</button>
        </>
    )

}



/* to send filtered object to APP():

https://www.youtube.com/watch?v=fGaEOESdPVI&ab_channel=IndianCoders

filter button will set the brand, price and type (yet to be added) of the filter function,
these will be chosen prior by the buttons / inputs. 
this filtered array will be sent to the App() component and then passed to
the shoe display component. 

Future: 
    assesibly way to clear filters
*/