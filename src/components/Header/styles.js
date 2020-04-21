import styled from "styled-components";
import { Link } from 'react-router-dom'

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 30px 0 30px 0;
    img {        
        height: 60px;
    }
`;

export const Cart = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    transition: opacity 0.2s;
    border-color: #7e8791;
    border-style: solid;
    border-radius: 4px;
    border-width: 0.5px;
    padding: 20px;

    &:hover {
        opacity: 0.7;
    }

    div {
        text-align: right;
        margin-right: 10px;

        strong {
            display: block;
            color: #fff;
        }

        span {
            font-size: 12px;
            color: #999
        }
    }

`;

