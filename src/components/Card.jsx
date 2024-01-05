import '../styling/Card.css';


export default function Card({shoe}) {





    return(
        <div id="card-border">
            <div id="picture-container">
                <p>{shoe.name}</p>
            </div>
            <div id="info-section">
                <div id="title-holder">

                </div>
            </div>
        </div>
    )
}


/* picture container has padding at bottom to make img not have
bottom border radius */


/* Need to implement random selection of that brands shoe.  */