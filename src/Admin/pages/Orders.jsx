import React, { useEffect, useState } from 'react'
import CategoryModal from '../components/CategoryModal'
import axios from 'axios'
import Form from 'react-bootstrap/Form';

// import { BsFillPencilFill } from 'react-icons/bs'
import { AiFillDelete } from 'react-icons/ai'
export default function Category() {

    const [category, setCategory] = useState([])

    useEffect(() => {
        axios.get('http://localhost:1234/api/get-all-orders')
            .then((json) => setCategory(json.data.orders))
            .catch((err) => console.log(err))

    }, [])

    return (
        <div className="container">
            <div className="d-flex justify-content-between align-items-center bg-warning p-2 my-3 rounded">
                <span className='fs-4 fw-bold'>Orders Section</span>
            </div>

            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th width={"25%"} scope="col">Order Date</th>
                            <th scope="col">Total Bill</th>
                            <th scope="col">Customer Name</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            category?.map((val, key) =>
                                <tr key={key}>
                                    <th scope="row">{val._id}</th>
                                    <td>{val.order_at}</td>
                                    <td>Rs. {val.totalBill}/-</td>
                                    <td>{val.customerName}</td>
                                    <th scope="col">
                                        <Form.Select aria-label="Default select example">
                                            <option>Please select Order status</option>
                                            <option value="1">In progress</option>
                                            <option value="2">Ready to Ship</option>
                                            <option value="3">Dilivered Successfully</option>
                                            <option value="4">Cancelled</option>
                                        </Form.Select>
                                    </th>


                                </tr>)
                        }



                    </tbody>
                </table>

            </div>
        </div>
    )
}
