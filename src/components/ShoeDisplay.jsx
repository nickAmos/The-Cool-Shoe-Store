
import '../styling/ShoeDisplay.css'





function ShoeDisplay({includedShoes}) {
  let ArrayOfShoes = includedShoes

    return(
        
        <>
        {ArrayOfShoes.map((shoe, index) => {
            
                return (
                    <div id='container' key={index}>
                      <p>{shoe.name}</p>
                      <p>{shoe.brand}</p>
                      <p>{shoe.type}</p>
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
