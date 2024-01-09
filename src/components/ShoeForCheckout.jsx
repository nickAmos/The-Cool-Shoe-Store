
import getShoe from "./GetShoe"
import { Button } from "semantic-ui-react"

export default function ShoeForCheckout({shoe, index, filterCart}) {

    let image = getShoe(shoe.name, '150px', '75px')

    return(
        <div key={index} id="flex-container-ch">
                                
                                <div id='text-section-ch'>
                                    <div id='name-exi-ch'>
                                        <h4>{shoe.name}</h4>
                                       
                                    </div>
                                    <div>
                                        <p>Size {shoe.size}</p>
                                    </div>
                                    
                                </div>
                                <div id='img-section-ch'>
                                    {image}
                                </div>
                                <div id="quantity-delete">
                        
                                    <div id='price-remove-ch'>
                                        <div><p>${shoe.price}.00 AUD</p></div>
                                    </div>
                                    <div id='button-container-ch' onClick={() => {filterCart(shoe.id)}}><Button compact basic color="red"><div id="wider-button">Remove</div></Button></div>

                                </div>
                            </div>
    )
}