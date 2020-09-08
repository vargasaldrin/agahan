import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(props) {

    return (
        <>
            <header>
                <Link to="/"><div id="agahan">Agahan</div></Link><br />
                <Link to="/bread"><div className="nav">Tinapay</div></Link><br />
                <Link to="/coffee"><div className="nav">Kape</div></Link><br />
                <Link to="/cart"><div className="nav">Kariton</div></Link><br />
            </header>
        </>
    )
}