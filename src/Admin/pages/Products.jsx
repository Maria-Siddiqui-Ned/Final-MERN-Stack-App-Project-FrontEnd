import React, { useEffect, useState } from 'react'
import ProductModal from '../components/ProductModal'
import axios from 'axios'
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai'
import { AppRoute } from '../../App'

export default function Products() {

    const [Product, setProduct] = useState([])
    useEffect(() => {
        axios.get("http://localhost:1234/api/get-all-products")
            .then(json => setProduct(json.data.products))
            .catch(err => console.log(err.message))
    })


    const deleteproduct = (_id) => {
        console.log(_id)
        const payload = { _id }


        let config = {
            method: 'delete',
            url: 'http://localhost:1234/api/delete-products',
            data: payload
        };


        axios(config).then(json => console.log(json.data)).catch(err => console.log(err))

    }

    return (
        <div className="container">
            <div className="d-flex justify-content-between align-items-center bg-warning p-2 my-3 rounded">
                <span className='fs-4 fw-bold '>Products Section</span>
                <ProductModal recallData={setProduct}/>
            </div>

            <div className="container">
                <table className="table align-middle">
                    <thead>
                        <tr>
                            <th scope="col">Thumbnail</th>
                            <th scope="col">Name</th>
                            <th scope="col">Category</th>
                            <th scope="col">Brand</th>
                            <th scope="col">Price</th>
                            <th scope="col">Description</th>
                            <th scope="col">Images</th>
                            <th scope="col">Actions</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            Product.map((val, key) =>
                                <tr key={key}>
                                    <td width={100}><img src={val.ProductThumbnail} className='img-fluid rounded-circle border border-secondary' style={{ height: '10vh', aspectRatio: 1 / 1, objectFit: 'contain' }} alt="" srcSet="" /></td>
                                    <td>{val.ProductName}</td>
                                    <td>{val.ProductCategory}</td>
                                    <td>{val.ProductBrand}</td>
                                    <td>Rs. {val.ProductPrice}</td>
                                    <td width={500}>{val.ProductDescription}</td>
                                    <td width={300}>
                                        <img src={val.ProductImageArray[0]} className='img-fluid rounded-circle border border-secondary m-2' style={{ height: '10vh', aspectRatio: 1 / 1, objectFit: 'contain' }} alt="" srcSet=""/>
                                        <img src={val.ProductImageArray[1]} className='img-fluid rounded-circle border border-secondary m-2' style={{ height: '10vh', aspectRatio: 1 / 1, objectFit: 'contain' }} alt="" srcSet=""/>
                                        <img src={val.ProductImageArray[2]} className='img-fluid rounded-circle border border-secondary m-2' style={{ height: '10vh', aspectRatio: 1 / 1, objectFit: 'contain' }} alt="" srcSet=""/>
                                        <img src={val.ProductImageArray[3]} className='img-fluid rounded-circle border border-secondary m-2' style={{ height: '10vh', aspectRatio: 1 / 1, objectFit: 'contain' }} alt="" srcSet=""/>
                                        </td>
                                    {/* <td>{val.ProductDescription.length < 20 ? val.description : val.description.substring(0, 20) + "..."}</td> */}
                                    <td className='d-flex justify-content-between'>
                                        <button className="btn btn-dark m-1"><AiOutlineEdit /></button>
                                        <button className="btn btn-dark m-1" onClick={() => deleteproduct(val._id)}><AiOutlineDelete /></button>
                                    </td>

                                </tr>)
                        }



                    </tbody>
                </table>

            </div>
        </div>
    )
}
