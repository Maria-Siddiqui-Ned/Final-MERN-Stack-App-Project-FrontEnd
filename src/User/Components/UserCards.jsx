import React from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';


export default function UserCards({ name, image, url }) {
    return (
        <div className="col-md-3 my-2 align-items-center">
            <div className='d-flex align-items-center gap-3'>
                {/* <Link className='text-decoration-none' to={`/products/${val.id}`}> */}
                <Card width={"100%"} border="primary" bg="dark" text='light'>
                    <Card.Img className="object-fit-fill" height={200} width={"200%"} variant="top" src={image} />
                    <Card.Body >
                        <Card.Title >{name}</Card.Title>
                    </Card.Body>
                </Card>
                {/* </Link> */}
            </div>
        </div>
    )
}
