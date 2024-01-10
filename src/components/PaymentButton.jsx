import { Icon, Button } from "semantic-ui-react";
import '../styling/PaymentButton.css';
import { useState } from "react";
import { Modal, Box } from "@mui/material";



export default function PaymentButton({color, paymentName, paymentIcon, txtColor, borderColorTop, borderColorLeft, borderColorRight, borderColorBottom, pointer, subtotal, delivery}) {

    const [openDetails, setOpenDetails] = useState(false);
    const handleOpenDetails = () => setOpenDetails(true);
    const handleCloseDetails = () => setOpenDetails(false); 

    const [loading, setLoading] = useState(false);

    const stylePayment = {
        position: 'absolute', top: '50%', left: '50%', padding: 0, marginLeft:'-500px', marginTop: '-300px',
        width: '1000px', height: '600px', bgcolor: 'white', border: '2px solid #000', boxShadow: 24, p: 4
      };

    const handleLoading = () => {

        setLoading(true);

        setTimeout(() => {

            handleOpenDetails();

            setLoading(false);

        }, 2000)
    }

    const [copied, setCopied] = useState(false);

    function getEmail() {
        let copyEmail = document.getElementById('email').innerHTML;
        console.log(copyEmail);
        navigator.clipboard.writeText(copyEmail);
        
        setTimeout(() => {
          setCopied(true);
        },0)
    
        setTimeout(() => {
          setCopied(false);
        },2000)
    
       
      }


    return(
        <>

            <Modal open={openDetails} onClose={handleCloseDetails} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">  
                <Box sx={stylePayment}>
                    <div id="flex-flex">
                        <div id="checkout-modal">
                            <div id="text-box">
                             <p><strong>Thank you for your order!</strong><br></br><br></br>Unfortunately you will <strong>not</strong> be receiving ${subtotal}.00 worth of shoes in {delivery} days time. This website is just a demonstration of my front-end development skills. If I have disappointed you please feel free to reach out using the links below, I'd be happy to explain why somethings are just too good to be true.   </p>
                            </div>
                            <div id="credentials">
                                <div id='contact-container'>
                                        <div id='social-icons'><Icon name='github'/><a href="https://github.com/nickAmos" target='_blank'>Github</a></div>
                                </div>
                                <div id='contact-container'>
                                        {copied ? <div id='copied-checkout'>
                                        <p>Copied!</p>
                                        <div id='copied-container-checkout'>
                                            <Icon name='copy'/>
                                            </div>
                                     </div> :null}
                                        <div onClick={() => getEmail()} id='social-icons'>
                                        <Icon name='mail'/><p id='email'>nick.amos2000@gmail.com</p>
                                </div>
                                </div>
                                <div id='contact-container'>
                                    <div id='social-icons'><Icon name='linkedin'/><a href="https://www.linkedin.com/in/nick-amos-2a2688247/" target="_blank">LinkedIn</a></div>
                                </div>
                                
                            </div>

                        </div>
                    </div>
                </Box> 
            </Modal> 


        { !loading ? 
        <div id="button-container" onClick={() => handleLoading()} style={{backgroundColor: color, borderLeft: borderColorLeft, borderRight: borderColorRight, borderTop: borderColorTop, borderBottom: borderColorBottom, cursor: pointer}}>
            <div id="txt-comp" style={{color: txtColor}}>{paymentName}</div>
            <div id="icon-comp" style={{color: txtColor}}>
                <Icon size='large' name={paymentIcon}/>
            </div>
         </div>
        : <Button loading style={{margin: '0px', width: '150px', height: '40px', borderRadius: '4px', boxSizing: 'border-box',backgroundColor: color, borderLeft: borderColorLeft, borderRight: borderColorRight, borderTop: borderColorTop, borderBottom: borderColorBottom, cursor: pointer}}></Button> }
        </>
    )
}