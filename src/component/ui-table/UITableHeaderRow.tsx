import React, { FC } from 'react';
import styled from 'styled-components';

type Props = {
    id?: string;
};

const Row = styled.tr<Props>`
    display: table-row;
    flex-direction: row;
    height: 48px;
    justify-content: flex-start;
    align-items: center;
    background-color: #fafafa;
`;

export const UITableHeaderRow: FC<Props> = (props) => {
    const { children } = props;
    return <Row>{children}</Row>;
};
