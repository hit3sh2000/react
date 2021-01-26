import React, { useState, useEffect } from 'react'
import axios from "../../axios";
import { Card, Button, DropdownButton, ButtonGroup, Dropdown } from "react-bootstrap";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import '../Card/Card.css';

function Cart() {

    const [carts, setCarts] = useState([])

    async function fetchCart() {
        const cart = await axios.post('/cart/cartItems', { "id": "6003e7bbd06e4c18746a3178" })


        return cart;
    }

    useEffect(() => {
        fetchCart()
            .then(res => {
                setCarts(res.data)
            });
    }, []);

    // {item.C_name +" "+item.C_price +" "+item.C_img +" "+item.C_duration}

    return (
        <div className="mb-2">
            <DropdownButton
                as={ButtonGroup}
                key={'left'}
                id={`dropdown-button-drop-left`}
                drop={'left'}
                // variant="secondary"
                title={<ShoppingCartIcon />}
            >
                {carts.map(item => {
                    return <Dropdown.Item eventKey="1">
                        <Card style={{ width: '15rem' }}>
                            <Card.Title>{item.C_name}</Card.Title>
                            <Card.Body>{item.C_price}</Card.Body>
                            <Button variant="danger">Remove Course</Button>
                        </Card>
                    </Dropdown.Item>
                })}
            </DropdownButton>
        </div>



    )
}

export default Cart
