import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Device } from '../../config/theme-config';


const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
const WrapperLeft = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`;
const WrapperRight = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
`;

const Title = styled.h4`
    font-size: 24px;
    font-weight: 700;
    color: #ff6600;

    @media ${Device.tablet} {
        color: #009999;
    }
`;

const Header = () => {
    return (
        <Wrapper>
            <WrapperLeft>
                <Title>Header</Title>
            </WrapperLeft>

            <WrapperRight>
                <Link to="/cart">Cart</Link>
            </WrapperRight>

        </Wrapper>
    );
};

export default Header;