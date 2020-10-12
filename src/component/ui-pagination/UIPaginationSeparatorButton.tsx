import React, { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div<IProps>`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border-radius: ${(props) => props.borderRadius}px;
    border: solid 1px ${(props) => props.borderColor};
    background-color: ${(props) => props.fillColor};

    @media (max-width: 600px) {
        display: none;
    }

    &:hover {
        > div {
            background-color: ${(props) => props.hoverColor};
        }
    }

    div {
        width: 4px;
        height: 4px;
        background-color: ${(props) => props.textColor};
        border-radius: 2px;
        margin: 1.5px;
    }
`;

interface IProps {
    fillColor?: string;
    borderColor?: string;
    textColor?: string;
    hoverColor?: string;
    borderRadius?: number;
}

const UIPaginationSeparatorButton: FC<IProps> = ({ fillColor, borderColor, borderRadius, textColor, hoverColor }) => {
    return (
        <Wrapper
            fillColor={fillColor}
            borderColor={borderColor}
            borderRadius={borderRadius}
            textColor={textColor}
            hoverColor={hoverColor}
        >
            <div />
            <div />
            <div />
        </Wrapper>
    );
};

const defaultProps: IProps = {
    fillColor: '#ffffff',
    borderColor: '#d9d9d9',
    borderRadius: 2,
    textColor: '#bfbfbf',
    hoverColor: '#1791ff',
};

UIPaginationSeparatorButton.defaultProps = defaultProps;

export default UIPaginationSeparatorButton;
