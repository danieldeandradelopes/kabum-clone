import React from 'react';
import { Link } from 'react-router-dom'
import { MdShoppingCart } from 'react-icons/md'
import { Container, Cart } from './styles'
import logo from '../../assets/logo_kabum.png'
import { connect } from 'react-redux'

function Header({ cartSize }) {


    return (
        <Container>
            <Link to="/">
                <img src={logo} alt="My Shop" />
            </Link>

            <Cart to="/cart">
                <div>
                    <strong>My Cart</strong>
                    <span>{cartSize} Itens</span>
                </div>
                <MdShoppingCart size={36} color="#fff" />
            </Cart>
        </Container>
    )
}

export default connect(state => ({
    cartSize: state.cart.length
}))(Header);