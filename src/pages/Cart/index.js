import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md'
import { Container, ProductsTable, Total } from "./style";
import { format } from '../../util/format'
import * as CardActions from '../../store/modules/cart/actions'
import { bindActionCreators } from 'redux';


function Cart({ cart, removeFromCart }) {

    const [amount, setAmount] = useState(0)

    const handleDeleteProduct = (id) => {

        removeFromCart(id);
    }


    return (
        <Container>
            <ProductsTable>
                <thead>
                    <tr>
                        <th />
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                        <th />
                    </tr>
                </thead>
                <tbody>

                    {
                        cart.map(item => (

                            <tr key={item.id}>
                                <td>
                                    <img src={item.image} />
                                </td>
                                <td>
                                    <strong>{item.title}</strong>
                                    <span>{item.priceFormatted}</span>
                                </td>
                                <td>
                                    <div>
                                        <button type="button">
                                            <MdRemoveCircleOutline size={20} color="#E06500" />
                                        </button>
                                        <input type="number" readOnly value={item.amount} />
                                        <button type="button">
                                            <MdAddCircleOutline size={20} color="#E06500" />
                                        </button>
                                    </div>
                                </td>
                                <td>
                                    <strong>{item.priceFormatted}</strong>
                                </td>
                                <td>
                                    <button type="button">
                                        <MdDelete size={20} color="#E06500" onClick={() => handleDeleteProduct(item.id)} />
                                    </button>
                                </td>
                            </tr>

                        ))
                    }
                </tbody>
            </ProductsTable>

            <footer>
                <button type="button">finalizar compra</button>

                <Total>
                    <span>Total</span>
                    <strong>R$ {amount}</strong>
                </Total>
            </footer>
        </Container>
    )
}

const mapStateToProps = state => ({
    cart: state.cart
})

const mapDispatchToProps = dispatch =>
    bindActionCreators(CardActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Cart);