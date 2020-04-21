import React from 'react';
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md'
import { Container, ProductsTable, Total } from "./style";
function Cart() {
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
                    <tr>
                        <td>
                            <img src="https://images2.kabum.com.br/produtos/fotos/68082/68082_index_gg.jpg" />
                        </td>
                        <td>
                            <strong>Headset Thermaltake Sposts Shock 3D 7.1 USB Black HT-RSO-DIECBK-13</strong>
                            <span>R$ 477.53</span>
                        </td>
                        <td>
                            <div>
                                <button type="button">
                                    <MdRemoveCircleOutline size={20} color="#E06500" />
                                </button>
                                <input type="number" readOnly value={1} />
                                <button type="button">
                                    <MdAddCircleOutline size={20} color="#E06500" />
                                </button>
                            </div>
                        </td>
                        <td>
                            <strong>R$ 800,00</strong>
                        </td>
                        <td>
                            <button type="button">
                                <MdDelete size={20} color="#E06500" />
                            </button>
                        </td>
                    </tr>
                </tbody>
            </ProductsTable>

            <footer>
                <button type="button">finalizar compra</button>

                <Total>
                    <span>Total</span>
                    <strong>R$ 477.53</strong>
                </Total>
            </footer>
        </Container>
    )
}


export default Cart;