import '../styling/Header.css'
import 'semantic-ui-css/semantic.min.css'
import { Icon } from 'semantic-ui-react';

function Header() {


    return (
        <>
            <div id="header-container">
                <div id='navbar'>
                    <div id='navbar-flex'>
                        <div id='left-box'>
                            <div className='icon-container'>
                                <Icon name='sliders horizontal' size='big'/>
                            </div>
                        </div>
                        <div id='middle-box'>
                            <h1>The Shoe Store.</h1>
                        </div>
                        <div id='right-box'>
                            <div className='icon-container'>
                            <Icon name="cart" size='big'/>
                            </div>
                        </div>
                    </div>

                </div>
                <div id='scrolling-banner'>
                    <div id='scroll'>
                        <div id='right-left-middle'>
                            Huge summer sale on nike adidias and others omg incrediBLEE!, so many sales its crazyyyyyyy, like go and guy some shoes my guuy.
                            <span></span>
                        </div>
                        <div id='right-left-LHS'>
                            Huge summer sale on nike adidias and others omg incrediBLEE!, so many sales its crazyyyyyyy, like go and guy some shoes my guuy.
                            <span></span>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Header;