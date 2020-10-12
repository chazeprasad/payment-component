import React, { FC, ReactNode } from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.div<Partial<IProps>>`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    max-height: 30px;
    border-radius: ${(props) => props.borderRadius}px;
    border: solid 1px ${(props) => props.borderColor};
    background-color: ${(props) => props.fillColor};
    margin-left: 5px;
    margin-right: 5px;
    padding-top: 2px;
    box-sizing: border-box;

    overflow: hidden;
    cursor: pointer;

    @media (max-width: 600px) {
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
    disabled?: boolean;
    fillColor?: string;
    iconColorEnabled?: string;
    iconColorDisabled?: string;
    borderColor?: string;
    borderRadius?: number;
    onPress?: () => void;
    children?: ReactNode;
}

const UIPaginationNavButton: FC<IProps> = ({
    onPress,
    disabled,
    children,
    fillColor,
    borderColor,
    borderRadius,
    iconColorEnabled,
    iconColorDisabled,
}) => {
    const childrenWithProps = React.Children.map(children, (child) => {
        const props = {
            stroke: disabled ? iconColorDisabled : iconColorEnabled,
        };
        if (React.isValidElement(child)) {
            return React.cloneElement(child, props);
        }
        return child;
    });
    return (
        <Wrapper
            onClick={() => {
                if (!disabled && onPress) onPress();
            }}
            disabled={disabled}
            fillColor={fillColor}
            borderColor={borderColor}
            borderRadius={borderRadius}
        >
            {childrenWithProps}
        </Wrapper>
    );
};

const defaultProps: IProps = {
    disabled: false,
    fillColor: '#ffffff',
    borderColor: '#d9d9d9',
    borderRadius: 2,
    iconColorEnabled: '#000000',
    iconColorDisabled: '#d9d9d9',
};

UIPaginationNavButton.defaultProps = defaultProps;

export default UIPaginationNavButton;
