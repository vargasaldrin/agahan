import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import data from '../data/breadData'

export default function Home() {

    function handleClick(e) {
        console.log(e.target)
    }

    const breads = data.map(bread => (
        <div className="card" key={bread.id} onClick={handleClick}>
            <img className="bread_image" src={bread.img} alt={bread.name} />
            <div className="bread_name">{bread.name}</div>
        </div>
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