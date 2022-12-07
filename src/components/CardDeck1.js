import React from 'react'
import Card from './Card'

export default function CardDeck1() {
    return (
        <div className="mx-2 my-2 py-2 px-3" style={{ backgroundColor: 'white' }}>
            <div className="my-1"style={{ borderBottom: '1.5px solid #80808057' }}>
                <h3>Category&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                    &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                    <button className="btn btn-primary text-white">VIEW ALL</button>
                </h3>
            </div>
            <div>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    )
}
