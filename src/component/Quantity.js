import React , {useState} from 'react'


export default function Quantity(props) {
    const[quantity, setQuantity] = useState(0)

    function handleChange(e) {

    }

    return (
        <div className="quantifier">
            <button className="button_add">+</button>
            <input type="number" value={quantity} onChange={handleChange} />
            <button className="button_subtract">-</button>
        </div>
    )
}