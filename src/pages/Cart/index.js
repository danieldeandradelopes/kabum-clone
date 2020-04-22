import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md'
import { Container, ProductsTable, Total } from "./style";
import { format } from '../../util/format'
import * as CardActions from '../../store/modules/cart/actions'
import { bindActionCreators } from 'redux';


function Cart({ cart, total, removeFromCart, updateAmount }) {

    const increment = (product) => {
        updateAmount(product.id, product.amount + 1)
    }

    const decrement = (product) => {
        updateAmount(product.id, product.amount - 1)
    }

    const handleDeleteProduct = (id) => {

        removeFromCart(id);
    }


    return (
        <Container>
            <ProductsTable>
                <thead>
                    <tr>
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
                                        <button type="button" onClick={() => decrement(item)}>
                                            <MdRemoveCircleOutline size={20} color="#E06500" />
                                        </button>
                                        <input type="number" readOnly value={item.amount} />
                                        <button type="button" onClick={() => increment(item)} >
                                            <MdAddCircleOutline size={20} color="#E06500" />
                                        </button>
                                    </div>
                                </td>
                                <td>
                                    <strong>{item.subTotal}</strong>
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
                    <strong>{total}</strong>
                </Total>
            </footer>
        </Container>
    )
}

const mapStateToProps = state => ({
    cart: state.cart.map(product => ({
        ...product,
        subTotal: format(product.price * product.amount)
    })),
    total: format(
        state.cart.reduce((total, product) => {
            return total + product.price * product.amount
        }, 0)
    )
})

const mapDispatchToProps = dispatch =>
    bindActionCreators(CardActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Cart);