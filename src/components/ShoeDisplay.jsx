
import '../styling/ShoeDisplay.css'
import Shoe from './Shoe'





function ShoeDisplay({includedShoes}) {
  let ArrayOfShoes = includedShoes

    return(
        
        <>

        <div id='display-container'>
          <div class='grid-container'>
              {ArrayOfShoes.map((shoe, index) => {
                return (
                    <div class='grid-item' id='container' key={index}>
                      <Shoe shoe={shoe} index={index}/>
                    </div>
                    )})}
        </div>

      </div>
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
