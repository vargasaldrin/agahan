import React from 'react'
import Quantity from './Quantity'
import {useParams} from 'react-router-dom'
import data from '../data/breadData'

export default function Product(props) {
    const {breadID} = useParams()

    const bread = data.find(item => item.id === parseInt(breadID))

    return (
        <div className="product">
            <img className="product_image" src={`../images/${bread.img}`} alt={bread.name} />
            <h2 className="product_name">{bread.name}</h2>
            <p className="product_description">{bread.description}</p>
            <Quantity />
        </div>
    )
}