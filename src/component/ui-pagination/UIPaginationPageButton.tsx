import React, { FC } from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.div<Partial<IProps>>`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border-radius: 2px;
    border: solid 1px #d9d9d9;
    background-color: #ffffff;
    margin-left: 5px;
    margin-right: 5px;
    cursor: pointer;

    @media (max-width: 425px) {
        display: none;
    }

    &:hover {
        color: #1791ff;
    }
    &:focus {
        outline: 0;
    }

    > div {
        font-family: 'ProximaNovaRegular';
        font-size: 14px;
    }

    ${(props: any) =>
        props.active &&
        css`
            border: solid 1px #1791ff;
            color: #1791ff;
        `};
`;

interface IProps {
    page: number;
    active: boolean;
    onPress: () => void;
}

const UIPaginationPageButton: FC<IProps> = ({ page, onPress, active }) => {
    return (
        <Wrapper onClick={() => onPress()} active={active}>
            <div>{page}</div>
        </Wrapper>
    );
};

export default UIPaginationPageButton;
