import React from 'react'
import ProductImage from './images/product.jpg'

export default function Card() {
    return (
        <div className = "px-2 py-2 mx-1" style = {{display:'inline-block',border:'1px solid #8080802e',width: '14.3rem',height : '60vh'}}>
            <div style={{width: '17rem',display:'inline-block',height:'60vh'}}>
                <img src={ProductImage} alt="Card image cap" style ={{height : '25vh',width:'12rem'}}/>
                <div>
                    <strong>JBL Tune 230NCTWS</strong>
                    <p style ={{width:'14.1rem'}}>with Active Noise Cancellation,40H Playtime,JBL App & Speed Charge Bluetooth Headset (Black, True Wireless)</p>
                    <p style={{ color: 'grey' }}><strong>₹5,290</strong>&emsp;
                    <p style={{ color: 'green' }}>30% off</p></p>
                </div>
            </div>
        </div>
    )
}
