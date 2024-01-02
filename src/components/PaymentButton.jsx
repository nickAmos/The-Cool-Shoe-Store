import { Icon } from "semantic-ui-react";
import '../styling/PaymentButton.css';


export default function PaymentButton({color, paymentName, paymentIcon, txtColor, borderColorTop, borderColorLeft, borderColorRight, borderColorBottom, pointer}) {


    return(
        <>
        <div id="button-container" style={{backgroundColor: color, borderLeft: borderColorLeft, borderRight: borderColorRight, borderTop: borderColorTop, borderBottom: borderColorBottom, cursor: pointer}}>
            <div id="txt-comp" style={{color: txtColor}}>{paymentName}</div>
            <div id="icon-comp" style={{color: txtColor}}>
                <Icon size='large' name={paymentIcon}/>
            </div>
        </div>
        </>
    )
}