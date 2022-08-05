import React from 'react'

const AppleStore = ({ product, quantity, price }) => {
    return (
        <div>
            <h1>{product}</h1>
            <h1>{quantity}</h1>
            <h1>${price}</h1>
        </div>
    )
}


export default AppleStore