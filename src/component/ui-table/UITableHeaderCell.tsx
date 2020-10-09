/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import { UITableConfig } from './ui-table-config';

type Props = {
    first: boolean;
    last: boolean;
    text?: string;
    field: string;
    sortActive: boolean;
    sortOrder: number;
    onSortButtonPress: Function;
};

const Cell = styled.td<Partial<Props>>`
    border-bottom: solid 0.5px rgba(151, 151, 151, 0.33);

    > div {
        display: flex;
        flex-direction: row;
        padding-left: 26px;
        padding-right: 16px;
        height: 24px;
        justify-content: flex-start;
        align-items: center;

        ${(props: any) =>
            css`
                margin-left: ${props.first ? 32 : 0}px;
                margin-right: ${props.last ? 32 : 0}px;
            `}

        h4 {
            font-family: ${UITableConfig.HEADER_FONT_FAMILY};
            font-size: ${UITableConfig.HEADER_FONT_SIZE}px;
            font-weight: ${UITableConfig.HEADER_FONT_WEIGHT};
            color: ${UITableConfig.HEADER_TEXT_COLOR};
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

const SortArrowUp = styled.div<Partial<Props>>`
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-bottom: 5px solid #bfbfbf;
    cursor: pointer;

    ${(props: any) =>
        props.sortActive &&
        css`
            border-bottom: 5px solid ${props.sortOrder === -1 ? '#1791ff' : '#bfbfbf'};
        `}
`;

const SortArrowDown = styled.div<Partial<Props>>`
    margin-top: 3px;
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 5px solid #bfbfbf;
    cursor: pointer;

    ${(props: any) =>
        props.sortActive &&
        css`
            border-top: 5px solid ${props.sortOrder === 1 ? '#1791ff' : '#bfbfbf'};
        `}
`;

export const UITableHeaderCell: FC<Props> = (props) => {
    const { text, first, last, field, sortActive, sortOrder, onSortButtonPress } = props;
    return (
        <Cell first={first} last={last}>
            <div>
                <h4
                    onClick={() => {
                        if (sortActive) {
                            onSortButtonPress(field, sortOrder * -1);
                        } else {
                            onSortButtonPress(field, -1);
                        }
                    }}
                >
                    {text}
                </h4>
                <span>
                    <SortArrowUp
                        onClick={() => {
                            onSortButtonPress(field, -1);
                        }}
                        sortActive={sortActive}
                        sortOrder={sortOrder}
                    />
                    <SortArrowDown
                        onClick={() => {
                            onSortButtonPress(field, 1);
                        }}
                        sortActive={sortActive}
                        sortOrder={sortOrder}
                    />
                </span>
            </div>
        </Cell>
    );
};
