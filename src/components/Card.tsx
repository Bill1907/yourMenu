import { FunctionComponent, ReactNode } from "react";
import styled from "@emotion/styled";

type CardChild = {
    children: ReactNode
}

const CardComponent = styled.div`
    width: 250px;
    background-color: #1a1a1a;
    padding: 25px;
    border-radius: 25px;
    @media (min-width: 576px) {
        width: 400px; 
    }
    @media (min-width: 1200px) {
        width: 600px; 
    }
`

const Card: FunctionComponent<CardChild> = ({ children }) => {
    return (
        <CardComponent>
            { children }
        </CardComponent>
    )
  };

export default Card;
