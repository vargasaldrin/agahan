import React from 'react'
import { Link } from 'react-router-dom'
import data from '../data/breadData'

export default function Home() {

    function handleClick(e) {
        console.log(e.target)
    }

    const breads = data.map(bread => (
        <Link to={`/bread/${bread.id}`} key={bread.id}>
            <div className="card" >
                <img className="bread_image" src={`./images/${bread.img}`} alt={bread.name} />
                <div className="bread_name">{bread.name}</div>
            </div>
        </Link>
    ))

    return (
        <>
            <h1>Bread Page</h1>
            <div className="tiles">
                {breads}
            </div>
        </>
    )
}