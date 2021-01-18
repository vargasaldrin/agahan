import React, {useState, useContext} from 'react'
const ThemeContext = React.createContext();

function Provider(props) {
    const [cartItems, useCartItems] = useState([])

    return (
        <ThemeContext.Provider>
            {props.children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext, Provider }