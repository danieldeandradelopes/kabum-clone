import styled from "styled-components";

export const ProductList = styled.ul`
    display: grid;
    grid-template-columns:repeat(3, 1fr);
    grid-gap: 20px;
    list-style: none;

    li {
        display: flex;
        flex-direction:column;
        background: #fff;
        border-radius: 4px;
        padding: 20px;

        img {
            align-self: center;
            max-width: 250px;
        }

        > strong {
            font-size: 16px;
            line-height: 20px;
            color: #333;
            margin-top: 5px;
        }

        > span {
            font-size: 21px;
            font-weight: bold;
            margin: 5px 0 20px;
        }

        button {
            background:  #E06500;
            color:#fff;
            border: 0;
            border-radius: 4px;
            overflow: hidden;
            /* make button stay in equal position */
            margin-top: auto;            
            display: flex;
            align-items: center;

            &:hover {
                background: #af5408
            }

            div {
                display: flex;
                align-items: center;
                padding: 12px;
                background-color: rgba(30, 86, 152,1)
            }

            svg {
                margin-right: 5px;
            }

            span {
                flex: 1;
                text-align: center;
                padding: 10px;
            }
        }
    }


`;