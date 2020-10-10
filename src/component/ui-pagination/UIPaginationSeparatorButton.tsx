import React, { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;

    @media (max-width: 425px) {
        display: none;
    }

    div {
        width: 4px;
        height: 4px;
        background-color: #bfbfbf;
        border-radius: 2px;
        margin: 1.5px;
    }
`;

interface IProps {}

const UIPagination: FC<IProps> = (props) => {
    return (
        <Wrapper>
            <div />
            <div />
            <div />
        </Wrapper>
    );
};

export default UIPagination;
