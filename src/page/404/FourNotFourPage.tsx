import React from 'react';
import styled from 'styled-components';
import { ThemeColor } from '../../config/theme-config';


const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

const Title = styled.div`
    display: flex;
    font-size: 24px;
    font-weight: 400;
    color: ${ThemeColor.TEXT_COLOR};
    text-transform: none;
    margin-bottom: 4px;
    height: auto;
    min-height: 4px;
    max-height: 26px;
    overflow: hidden;
    justify-content:center;
`;

type Props = {
    data?: any;
};
  
const FourNotFourPage = (props: Props) => {
    return (
        <Wrapper>
            <Title>404</Title>
        </Wrapper>
    );
};

export default FourNotFourPage;