import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { MdAddShoppingCart } from 'react-icons/md'
import { ProductList } from './styles'
import { format } from '../../util/format'
import api from '../../services/api'
import * as CardActions from '../../store/modules/cart/actions'
import { bindActionCreators } from 'redux';

function Home(props) {

    const [products, setProducts] = useState([])

    const handleAddProduct = (product) => {

        const { addToCart } = props;

        addToCart(product);
    }

    useEffect(() => {
        async function fetchData() {
            const response = await api.get('products')

            const data = response.data.map(product => ({
                ...product,
                priceFormatted: format(product.price)
            }))

            setProducts(...products, data)
        }
        fetchData()

    }, [])

    const { amount } = props;

    return (
        <ProductList>

            {products.map(prod => (
                <li key={prod.id}>
                    <img src={prod.image} alt="" />
                    <strong>{prod.title}</strong>
                    <span>{prod.priceFormatted}</span>
                    <button type="button" onClick={() => handleAddProduct(prod)}>
                        <div>
                            <MdAddShoppingCart size={16} color="#fff" /> {amount[prod.id] || 0}
                        </div>

                        <span>Added to my cart</span>
                    </button>
                </li>
            ))}

        </ProductList>
    )

}

const mapStateToProps = state => ({
    amount: state.cart.reduce((amount, product) => {
        amount[product.id] = product.amount
        return amount;
    }, {})
});


const mapDispatchToProps = dispatch =>
    bindActionCreators(CardActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home);