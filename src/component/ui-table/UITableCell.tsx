import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import { UITableConfig, TableField } from './ui-table-config';
import { UITableCellRenderer } from './cell-item/UITableCellRenderer';

const Cell = styled.td<Partial<IProps>>`
    padding: 0;
    margin: 0;
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
        height: ${(props) => props.height}px;

        ${(props: any) =>
            css`
                margin-left: ${props.first ? 32 : 0}px;
                margin-right: ${props.last ? 32 : 0}px;
                border-bottom: solid 0.5px rgba(151, 151, 151, ${props.adjacent || props.active ? 0 : 0.33});
            `}
    }
`;

interface IProps {
    first: boolean;
    last: boolean;
    active: boolean;
    adjacent: boolean;
    cellType: string;
    text: string;
    height?: number;
}

const UITableCell: FC<IProps> = (props) => {
    const { text, cellType } = props;
    return (
        <Cell {...props}>
            <div>
                <UITableCellRenderer data={text} type={cellType} />
            </div>
        </Cell>
    );
};

const defaultProps: IProps = {
    first: false,
    last: false,
    active: false,
    adjacent: false,
    cellType: TableField.STRING,
    text: '',
    height: UITableConfig.RECORD_LINE_HEIGHT,
};

UITableCell.defaultProps = defaultProps;

export default UITableCell;
