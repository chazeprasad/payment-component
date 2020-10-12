import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

const Row = styled.tr<IProps>`
    display: table-row;
    flex-direction: row;
    height: ${(props) => props.height}px;
    justify-content: flex-start;
    align-items: center;
    background-color: ${(props) => props.fillColor};
`;

interface IProps {
    children?: ReactNode;
    height?: number;
    fillColor?: string;
}

const UITableHeaderRow: FC<IProps> = (props) => {
    const { children, height, fillColor } = props;
    return (
        <Row height={height} fillColor={fillColor}>
            {children}
        </Row>
    );
};

const defaultProps: IProps = {
    height: 48,
    fillColor: '#fafafa',
};

UITableHeaderRow.defaultProps = defaultProps;

export default UITableHeaderRow;
