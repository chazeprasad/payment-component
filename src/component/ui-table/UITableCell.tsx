import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import { UITableConfig } from './ui-table-config';
import { UITableCellRenderer } from './cell-item/UITableCellRenderer';

type Props = {
    first: boolean;
    last: boolean;
    active: boolean;
    adjacent: boolean;
    cellType: string;
    text: string;
};

const Cell = styled.td<Partial<Props>>`
    ${(props: any) =>
        css`
            border-top: solid 0.5px rgba(151, 151, 151, ${props.active ? 0.33 : 0});
            border-bottom: solid 0.5px rgba(151, 151, 151, ${props.active ? 0.33 : 0});
        `}

    > div {
        display: flex;
        flex-direction: row;
        padding-left: 26px;
        padding-right: 16px;
        justify-content: flex-start;
        align-items: center;
        border-bottom: solid 0.5px rgba(151, 151, 151, 0.33);
        height: ${UITableConfig.RECORD_LINE_HEIGHT}px;

        ${(props: any) =>
            css`
                margin-left: ${props.first ? 32 : 0}px;
                margin-right: ${props.last ? 32 : 0}px;
                border-bottom: solid 0.5px rgba(151, 151, 151, ${props.adjacent || props.active ? 0 : 0.33});
            `}
    }
`;

export const UITableCell: FC<Props> = (props) => {
    const { text, first, last, adjacent, active, cellType } = props;
    return (
        <Cell first={first} last={last} adjacent={adjacent} active={active}>
            <div>
                <UITableCellRenderer data={text} type={cellType} />
            </div>
        </Cell>
    );
};
