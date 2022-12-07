import React from 'react'
import ProductImage from './images/product.jpg'

export default function CardDeck() {
    return (
        <div className="my-3 py-3 mx-2 px-3" style={{ backgroundColor: "white" }}>
            <div style={{ borderBottom: '1px solid #80808057' }}>
                <h3>Category &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                    &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                    <button className="btn btn-primary text-white">VIEW ALL</button></h3>
            </div>
            <div className="card" style={{ width: '15rem',display:'inline-block'}}>
                <img src={ProductImage} className="card-img-top" alt="..." height="150px" width="100px" />
                <div className="card-body">
                    <h5 className="card-title">JBL Tune 230NCTWS</h5>
                    <p className="card-text"> with Active Noise Cancellation,40H Playtime,JBL App & Speed Charge Bluetooth Headset (Black, True Wireless)</p>
                    <p style={{ color: 'grey' }}><strong>₹5,290</strong>&emsp;
                        <p style={{ color: 'green' }}>30% off</p></p>
                </div>
            </div>
            <div className="card" style={{ width: '15rem',display:'inline-block' }}>
                <img src={ProductImage} className="card-img-top" alt="..." height="150px" width="100px" />
                <div className="card-body">
                    <h5 className="card-title">JBL Tune 230NCTWS</h5>
                    <p className="card-text"> with Active Noise Cancellation,40H Playtime,JBL App & Speed Charge Bluetooth Headset (Black, True Wireless)</p>
                    <p style={{ color: 'grey' }}><strong>₹5,290</strong>&emsp;
                    <p style={{ color: 'green' }}>30% off</p></p>
                </div>
            </div>
            <div className="card" style={{ width: '15rem',display:'inline-block'  }}>
                <img src={ProductImage} className="card-img-top" alt="..." height="150px" width="100px" />
                <div className="card-body">
                    <h5 className="card-title">JBL Tune 230NCTWS</h5>
                    <p className="card-text"> with Active Noise Cancellation,40H Playtime,JBL App & Speed Charge Bluetooth Headset (Black, True Wireless)</p>
                    <p style={{ color: 'grey' }}><strong>₹5,290</strong>&emsp;
                        <p style={{ color: 'green' }}>30% off</p></p>
                </div>
            </div>
            <div className="card" style={{ width: '15rem',display:'inline-block'  }}>
                <img src={ProductImage} className="card-img-top" alt="..." height="150px" width="100px" />
                <div className="card-body">
                    <h5 className="card-title">JBL Tune 230NCTWS</h5>
                    <p className="card-text"> with Active Noise Cancellation,40H Playtime,JBL App & Speed Charge Bluetooth Headset (Black, True Wireless)</p>
                    <p style={{ color: 'grey' }}><strong>₹5,290</strong>&emsp;
                        <p style={{ color: 'green' }}>30% off</p></p>
                </div>
            </div>
            <div className="card" style={{ width: '15rem',display:'inline-block'  }}>
                <img src={ProductImage} className="card-img-top" alt="..." height="150px" width="100px" />
                <div className="card-body">
                    <h5 className="card-title">JBL Tune 230NCTWS</h5>
                    <p className="card-text"> with Active Noise Cancellation,40H Playtime,JBL App & Speed Charge Bluetooth Headset (Black, True Wireless)</p>
                    <p style={{ color: 'grey' }}><strong>₹5,290</strong>&emsp;
                        <p style={{ color: 'green' }}>30% off</p></p>
                </div>
            </div>
        </div>
    )
}
