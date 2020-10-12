import React, { FC } from 'react';
import styled, { css } from 'styled-components';

const Row = styled.tr<Partial<IProps>>`
    display: table-row;
    flex-direction: row;
    height: ${(props) => props.height}px;
    justify-content: flex-start;
    align-items: center;
    background-color: #ffffff;
    transition: background-color 400ms;
    cursor: pointer;
    border-top: solid 0.5px rgba(151, 151, 151, 0);
    border-bottom: solid 0.5px rgba(151, 151, 151, 0);

    ${(props: any) =>
        props.active &&
        css`
            background-color: rgba(246, 246, 255, 0.5);
        `}

    :hover {
        background-color: rgba(246, 246, 255, 0.5);
    }
`;

interface IProps {
    active: boolean;
    onPress?: () => void;
    height?: number;
}

const UITableRow: FC<IProps> = (props) => {
    const { children, onPress, active, height } = props;
    return (
        <Row
            active={active}
            height={height}
            onClick={() => {
                if (onPress) onPress();
            }}
        >
            {children}
        </Row>
    );
};

const defaultProps: IProps = {
    active: true,
    height: 38,
    onPress: () => {},
};

UITableRow.defaultProps = defaultProps;

export default UITableRow;
