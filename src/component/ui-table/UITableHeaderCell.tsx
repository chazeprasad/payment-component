import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import { UITableConfig, FONT_WEIGHT_400, TableField } from './ui-table-config';

const Cell = styled.td<Partial<IProps>>`
    border-bottom: solid 0.5px rgba(151, 151, 151, 0.33);

    > div {
        display: flex;
        flex-direction: row;
        padding-left: 26px;
        padding-right: 16px;
        height: ${(props) => props.height};
        justify-content: flex-start;
        align-items: center;

        ${(props: any) =>
            css`
                margin-left: ${props.first ? 32 : 0}px;
                margin-right: ${props.last ? 32 : 0}px;
            `}

        > div {
            font-family: ${(props) => props.fontFamily};
            font-size: ${(props) => props.fontSize}px;
            font-weight: ${(props) => props.fontWeight};
            color: ${(props) => props.color};
            margin: 0;
            padding: 0;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: normal;
            text-transform: uppercase;
            cursor: pointer;
        }

        span {
            margin-left: 8px;
            margin-right: 8px;
            display: flex;
            flex-direction: column;
        }
    }
`;

const SortArrowUp = styled.div<Partial<IProps>>`
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-bottom: 5px solid ${(props) => props.sortIconColor};
    cursor: pointer;

    ${(props: any) =>
        props.sortActive &&
        css`
            border-bottom: 5px solid ${props.sortOrder === -1 ? props.sortIconSelectedColor : props.sortIconColor};
        `}
`;

const SortArrowDown = styled.div<Partial<IProps>>`
    margin-top: 3px;
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 5px solid ${(props) => props.sortIconColor};
    cursor: pointer;

    ${(props: any) =>
        props.sortActive &&
        css`
            border-top: 5px solid ${props.sortOrder === 1 ? props.sortIconSelectedColor : props.sortIconColor};
        `}
`;

interface IProps {
    first: boolean;
    last: boolean;
    text?: string;
    field: string;
    sortActive: boolean;
    sortOrder: number;
    onSortButtonPress?: (string, number) => void;
    fontFamily?: string;
    fontSize?: number;
    fontWeight?: number;
    color?: string;
    height?: number;
    sortIconColor?: string;
    sortIconSelectedColor?: string;
}

export const UITableHeaderCell: FC<IProps> = (props) => {
    const {
        text,
        first,
        last,
        field,
        sortActive,
        sortOrder,
        onSortButtonPress,
        color,
        height,
        fontWeight,
        fontSize,
        fontFamily,
        sortIconColor,
        sortIconSelectedColor,
    } = props;
    return (
        <Cell
            first={first}
            last={last}
            color={color}
            height={height}
            fontWeight={fontWeight}
            fontSize={fontSize}
            fontFamily={fontFamily}
        >
            <div>
                <div
                    aria-hidden="true"
                    onClick={() => {
                        if (sortActive) {
                            if (onSortButtonPress) onSortButtonPress(field, sortOrder * -1);
                        } else if (onSortButtonPress) onSortButtonPress(field, -1);
                    }}
                >
                    {text}
                </div>
                <span>
                    <SortArrowUp
                        onClick={() => {
                            if (onSortButtonPress) onSortButtonPress(field, -1);
                        }}
                        sortActive={sortActive}
                        sortOrder={sortOrder}
                        sortIconColor={sortIconColor}
                        sortIconSelectedColor={sortIconSelectedColor}
                    />
                    <SortArrowDown
                        onClick={() => {
                            if (onSortButtonPress) onSortButtonPress(field, 1);
                        }}
                        sortActive={sortActive}
                        sortOrder={sortOrder}
                        sortIconColor={sortIconColor}
                        sortIconSelectedColor={sortIconSelectedColor}
                    />
                </span>
            </div>
        </Cell>
    );
};

const defaultProps: IProps = {
    first: false,
    last: false,
    text: '',
    field: TableField.STRING,
    sortActive: false,
    sortOrder: -1,
    height: 24,
    fontFamily: UITableConfig.HEADER_FONT_FAMILY,
    fontSize: UITableConfig.HEADER_FONT_SIZE,
    fontWeight: FONT_WEIGHT_400,
    color: UITableConfig.HEADER_TEXT_COLOR,
    sortIconColor: '#BFBFBF',
    sortIconSelectedColor: '#1791ff',
};

UITableHeaderCell.defaultProps = defaultProps;

export default UITableHeaderCell;
