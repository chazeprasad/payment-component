import React, { FC } from 'react';
import styled from 'styled-components';
import { UITableConfig } from '../ui-table-config';

const Wrapper = styled.div`
    span {
        font-family: ${UITableConfig.RECORD_FONT_FAMILY};
        font-size: ${UITableConfig.RECORD_FONT_SIZE}px;
        font-weight: ${UITableConfig.RECORD_FONT_WEIGHT};
        color: #434343;
        margin: 0;
        padding: 0;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
    }
`;

interface IProps {
    text: string;
}

export const UITableCurrencyItem: FC<IProps> = (props) => {
    const { text } = props;

    function formatCurrency(num) {
        return `$ ${num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}`;
    }

    return (
        <div>
            <Wrapper>
                <span>{formatCurrency(text)}</span>
            </Wrapper>
        </div>
    );
};
