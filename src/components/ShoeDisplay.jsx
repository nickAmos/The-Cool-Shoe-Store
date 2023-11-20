import { shoes } from '../Shoes';

let ArrayOfShoes = shoes

console.log(shoes[1]["name"]);

function ShoeDisplay() {

    return(
        
        <>
        {ArrayOfShoes.map((shoe, index) => {
            
                return (
                    <div key={index}>
                      <p>{shoe.name}</p>
                      <p>{shoe.brand}</p>
                      <p>{shoe.color}</p>
                      <p>{shoe.price}</p>
                    </div>
                  )
                
            
       
      })}
        </>
    )
}

export default ShoeDisplay;

/* 

Future: 
    use grid to position each component in a way that is responsive. 
    clicking on a shoe will route to a new page with more detials about
    the shoe. 
    

*/
