import React, {useState, useContext} from 'react'
const ThemeContext = React.createContext();

function Provider(props) {
    const [cartItems, useCartItems] = useState([])

    return (
        <ThemeContext.provider>
            
        </ThemeContext.provider>
    )
}