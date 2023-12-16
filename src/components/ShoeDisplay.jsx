
import '../styling/ShoeDisplay.css'
import Shoe from './Shoe'





function ShoeDisplay({includedShoes, changeShoe}) {

  let ArrayOfShoes = includedShoes

    return(
        
        <>

        <div id='display-container'>

          {ArrayOfShoes.length > 0 ? 
          <div class='grid-container'>
              {ArrayOfShoes.map((shoe, index) => {
                return (
                    <div class='grid-item' id='container' key={index}>
                      <Shoe changeShoe={changeShoe} shoe={shoe} index={index}/>
                    </div>
                    )})}
        </div> : null}

        {ArrayOfShoes.length === 0 ? <div>no shoes found</div> : null}

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
