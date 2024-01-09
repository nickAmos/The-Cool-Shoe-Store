

export default function getShoe(name, width, height) {

let image ='';

    if (name === 'Nike Alphafly 2') {
        image = <img alt='shoe' src={require('../Images/AlphaFly2.jpg')} width={width} height={height}/>
    } else if (name === 'Nike Alphafly 3 Proto'){
        image = <img alt='shoe' src={require('../Images/AlphyflyProto.jpg')} width={width} height={height}/>
    }
    else if (name === 'Saucony Endorphin Elite'){
        image = <img alt='shoe' src={require('../Images/EndorphinElite.jpg')} width={width} height={height}/>
    } else if (name === 'Adizero Adios Pro 3'){
        image = <img alt='shoe' src={require('../Images/ADIOZPRO3.jpg')} width={width} height={height}/>
    } else if (name === 'Saucony Endorphin Pro 3'){
        image = <img alt='shoe' src={require('../Images/EndorphinePro3.jpg')} width={width} height={height}/>
    } else if (name === 'Adizero Prime X 2.0 Strung'){
        image = <img alt='shoe' src={require('../Images/AdizeroPrimeX2.0Strung.jpg')} width={width} height={height}/>
    } else if (name === 'Nike Vaporfly 3'){
        image = <img alt='shoe' src={require('../Images/VaporFly3.jpg')} width={width} height={height}/>
    }else if (name === 'Adizero Prime X Strung'){
        image = <img alt='shoe' src={require('../Images/AdizeroPrimeXStrung.jpg')} width={width} height={height}/>
    }else if (name === 'Saucony Kinvara Pro'){
        image = <img alt='shoe' src={require('../Images/KinvaraPro.jpg')} width={width} height={height}/>
    }else if (name === 'Adizero Boston 12'){
        image = <img alt='shoe' src={require('../Images/Boston12.jpg')} width={width} height={height}/>
    }else if (name === 'Nike Invincible Run 3'){
        image = <img alt='shoe' src={require('../Images/Invincible3.jpg')} width={width} height={height}/>
    }else if (name === 'Saucony Endorphin Speed 3'){
        image = <img alt='shoe' src={require('../Images/EndorphineSpeed3.jpg')} width={width} height={height}/>
    }else if (name === 'Adizero Adios 8'){
        image = <img alt='shoe' src={require('../Images/Adios8.jpg')} width={width} height={height}/>
    }else if (name === 'Nike Pegasus 40'){
        image = <img alt='shoe' src={require('../Images/NikePeagasus40.jpg')} width={width} height={height}/>
    }else if (name === 'Saucony Triumph 21'){
        image = <img alt='shoe' src={require('../Images/Triumph21.jpg')} width={width} height={height}/>
    }else if (name === 'Adizero SL'){
        image = <img alt='shoe' src={require('../Images/adizeroSL.jpg')} width={width} height={height}/>
    }else if (name === 'Nike Pegasus Turbo'){
        image = <img alt='shoe' src={require('../Images/NikePegasusTurbo.jpg')} width={width} height={height}/>
    }else if (name === 'Saucony Guide 16'){
        image = <img alt='shoe' src={require('../Images/Guide16.jpg')} width={width} height={height}/>
    }else if (name === 'Adizero Boston 11'){
        image = <img alt='shoe' src={require('../Images/Boston11.jpg')} width={width} height={height}/>
    }else if (name === 'Nike Structure 25'){
        image = <img alt='shoe' src={require('../Images/NikeStructure25.jpg')} width={width} height={height}/>
    }else if (name === 'Saucony Axon 3'){
        image = <img alt='shoe' src={require('../Images/AXON3.jpg')} width={width} height={height}/>
    } else if (name === 'Nike Pegasus Turbo'){
        image = <img alt='shoe' src={require('../Images/NikePegasusTurbo.jpg')} width={width} height={height}/>
    }

    return image;
}