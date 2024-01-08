import { Icon, Button } from "semantic-ui-react";
import '../styling/PaymentButton.css';
import { useState } from "react";
import { Modal, Box } from "@mui/material";



export default function PaymentButton({color, paymentName, paymentIcon, txtColor, borderColorTop, borderColorLeft, borderColorRight, borderColorBottom, pointer}) {

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


    return(
        <>

            <Modal open={openDetails} onClose={handleCloseDetails} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">  
                <Box sx={stylePayment}>
                    <div id="flex-flex">
                        <div id="checkout-modal">
                            <div id="text-box">
                             <p>Text for post order button clickText for post order button clickText for post order button clickText for post order button clickText for post order button clickText for post order button clickText for post order button clickText for post order button clickText for post order button clickText for post order button clickText for post order button clickText for post order button clickText for post order button clickText for post order button clickText for post order button click</p>
                            </div>
                            <div id="credentials">
                                <p>Github: Linkdin: </p>
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