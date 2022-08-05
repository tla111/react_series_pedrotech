import React from 'react'

const User = ({ product, quantity, price }) => {
    return (
        <div>
            <h1>{product}</h1>
            <h1>{quantity}</h1>
            <h1>${price}</h1>
        </div>
    )
}


export default User;