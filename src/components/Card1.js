import React from 'react'
import ProductImage from './images/product.jpg'

export default function Card1() {
    return (
        <div>
            <div className="card">
                <img className="card-img-top" src="..." alt="Card " />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
       </div>
    )
}
