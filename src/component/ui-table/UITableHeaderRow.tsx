import React, { FC } from 'react';
import styled from 'styled-components';

const Row = styled.tr<IProps>`
    display: table-row;
    flex-direction: row;
    height: 48px;
    justify-content: flex-start;
    align-items: center;
    background-color: #fafafa;
`;

interface IProps {}

export const UITableHeaderRow: FC<IProps> = (props) => {
    const { children } = props;
    return <Row>{children}</Row>;
};
