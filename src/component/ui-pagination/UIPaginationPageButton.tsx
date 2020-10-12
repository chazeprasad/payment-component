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
    border: solid 1px ${(props) => props.borderColor};
    background-color: ${(props) => props.fillColor};
    margin-left: 5px;
    margin-right: 5px;
    cursor: pointer;

    @media (max-width: 600px) {
        display: none;
    }

    &:hover {
        border: solid 1px ${(props) => props.hoverColor};
        > div {
            color: ${(props) => props.hoverColor};
        }
    }

    &:focus {
        outline: 0;
    }

    ${(props: any) =>
        props.active &&
        css`
            border: solid 1px ${props.hoverColor};
        `};

    > div {
        font-family: 'ProximaNovaRegular';
        font-size: 14px;
        color: ${(props) => (props.active ? props.hoverColor : props.textColor)};
    }
`;

interface IProps {
    active: boolean;
    label: string;
    fillColor?: string;
    borderColor?: string;
    textColor?: string;
    hoverColor?: string;
    borderRadius?: number;
    onPress?: () => void;
}

const UIPaginationPageButton: FC<IProps> = ({
    active,
    label,
    onPress,
    fillColor,
    borderColor,
    borderRadius,
    textColor,
    hoverColor,
}) => {
    return (
        <Wrapper
            onClick={() => {
                if (onPress) onPress();
            }}
            fillColor={fillColor}
            borderColor={borderColor}
            borderRadius={borderRadius}
            textColor={textColor}
            hoverColor={hoverColor}
            active={active}
        >
            <div>{label}</div>
        </Wrapper>
    );
};

const defaultProps: IProps = {
    active: false,
    label: '1',
    fillColor: '#ffffff',
    borderColor: '#d9d9d9',
    borderRadius: 2,
    textColor: '#1A1A1A',
    hoverColor: '#1791ff',
};

UIPaginationPageButton.defaultProps = defaultProps;

export default UIPaginationPageButton;
