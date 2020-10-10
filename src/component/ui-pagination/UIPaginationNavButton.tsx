import React, { FC, ReactNode } from 'react';
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
    padding-top: 3px;

    overflow: hidden;
    cursor: pointer;

    @media (max-width: 425px) {
        border: none;
        margin-left: 2px;
        margin-right: 2px;
        width: 36px;
        height: 36px;
        padding-top: 3px;
        border-radius: 100%;
    }

    &:hover {
        color: #1791ff;
    }
    &:focus {
        outline: 0;
    }

    ${(props: any) =>
        props.disabled &&
        css`
            cursor: not-allowed;
            pointer-events: none;
        `};
`;

interface IProps {
    disabled: boolean;
    onPress: () => void;
    children: ReactNode;
}

const UIPaginationNavButton: FC<IProps> = ({ onPress, disabled, children }) => {
    return (
        <Wrapper
            onClick={() => {
                if (!disabled) onPress();
            }}
            disabled={disabled}
        >
            {children}
        </Wrapper>
    );
};

export default UIPaginationNavButton;
