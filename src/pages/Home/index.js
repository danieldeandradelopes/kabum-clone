import React, { useState, useEffect } from 'react';
import { MdAddShoppingCart } from 'react-icons/md'
import { ProductList } from './styles'
import { format } from '../../util/format'
import api from '../../services/api'

function Home() {

    const [products, setProducts] = useState([])

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

    return (
        <ProductList>

            {products.map(prod => (
                <li key={prod.id}>
                    <img src={prod.image} alt="" />
                    <strong>{prod.title}</strong>
                    <span>{prod.priceFormatted}</span>
                    <button type="button">
                        <div>
                            <MdAddShoppingCart size={16} color="#fff" />
                        </div>

                        <span>Added to my cart</span>
                    </button>
                </li>
            ))}

        </ProductList>
    )

}


export default Home;