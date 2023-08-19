import React, { useEffect, useState } from 'react'
import CategoryModal from '../components/CategoryModal'
import axios from 'axios'
import { BsFillPencilFill } from 'react-icons/bs'
import { AiFillDelete } from 'react-icons/ai'
export default function Brand() {

    const [brand, setBrand] = useState([])

    useEffect(() => {
        axios.get('http://localhost:1234/api/get-all-categories')
            .then((json) => setCategory(json.data.brand))
            .catch((err) => console.log(err))

    }, [])

    const deleteProduct = (BrandName) => { console.log(BrandName) }



    return (
        <div className="container">
            <div className="d-flex justify-content-between align-items-center bg-warning p-2 my-3 rounded">
                <span className='fs-4 fw-bold'>Brands Section</span>
                <BrandModal recallData={setBrand} />
            </div>

            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Brand Name</th>
                            <th scope="col">Brand Logo</th>
                            <th scope="col">Actions</th>


                        </tr>
                    </thead>
                    <tbody>
                        {
                            brand?.map((val, key) =>
                                <tr key={key}>
                                    <th scope="row">{val._id}</th>
                                    <td>{val.BrandName}</td>
                                    <td><img src={val.BrandImage} className='img-fluid' style={{ height: '5vh', objectFit: 'contain' }} alt="" srcSet="" /></td>
                                    <td>
                                        <button className="btn btn-dark mx-1"><BsFillPencilFill /></button>
                                        <button className="btn btn-dark mx-1" onClick={() => deleteProduct(val.BrandName)}><AiFillDelete /></button>
                                    </td>
                                </tr>)
                        }



                    </tbody>
                </table>

            </div>
        </div>
    )
}
