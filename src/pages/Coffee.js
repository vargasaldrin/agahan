import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import data from '../data/coffeeData'

export default function Home() {

    const coffees = data.map(coffee => (
        <div className="card" key={coffee.id}>
            <img className="bread_image" src={coffee.img} alt={coffee.name} />
            <div className="bread_name">{coffee.name}</div>
        </div>
    ))
    return (
        <>
            <h1>Coffee Page</h1>
            <div className="tiles">
                {coffees}
            </div>
        </>
    )
}