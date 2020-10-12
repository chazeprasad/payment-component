import React, { FC } from 'react';
import styled from 'styled-components';
import { FONT_REGULAR, UITableConfig, FONT_WEIGHT_400 } from '../ui-table-config';

const Wrapper = styled.div<IProps>`
    span {
        font-family: ${(props) => props.fontFamily};
        font-size: ${(props) => props.fontSize}px;
        font-weight: ${(props) => props.fontWeight};
        color: ${(props) => props.color};
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
    fontFamily?: string;
    fontSize?: number;
    fontWeight?: number;
    color?: string;
}

const UITableCurrencyItem: FC<IProps> = (props) => {
    const { text } = props;

    function formatCurrency(num) {
        return `$ ${num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}`;
    }

    return (
        <div>
            <Wrapper {...props}>
                <span>{formatCurrency(text)}</span>
            </Wrapper>
        </div>
    );
};

const defaultProps: IProps = {
    text: '100000000.00',
    fontFamily: FONT_REGULAR,
    fontSize: 14,
    fontWeight: FONT_WEIGHT_400,
    color: UITableConfig.RECORD_TEXT_COLOR,
};

UITableCurrencyItem.defaultProps = defaultProps;

export default UITableCurrencyItem;
