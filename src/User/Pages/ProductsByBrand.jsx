import React, { useEffect, useState } from 'react'
import UserCards from '../Components/UserCards'
import axios from 'axios'
import { AppRoute } from '../../App'

export default function ProductsByBrand() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:1234/api/get-product-by-brand?ProductBrand={}`)
            .then(json => setProducts(json.data.products))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="container my-5">
            <div className="text-center">
                <h2>Products</h2>
                <small className="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum delectus magnam doloribus voluptatibus possimus corrupti aliquid itaque harum debitis ipsa!</small>
            </div>

            <div className="row my-5">
                {
                    products.map((val, key) => <UserCards key={key} image={val.ProductThumbnail} name={val.ProductName} url={`/products/${val._id}`} />)
                }

            </div>
        </div>
    )
}
