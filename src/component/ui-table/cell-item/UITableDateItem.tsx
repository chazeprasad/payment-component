import React, { FC } from 'react';
import styled from 'styled-components';
import * as moment from 'moment';
import { Moment } from 'moment';
import { FONT_REGULAR, UITableConfig, FONT_WEIGHT_400 } from '../ui-table-config';

const Wrapper = styled.div<IProps>`
    span {
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
    }
`;

interface IProps {
    text: string;
    fontFamily?: string;
    fontSize?: number;
    fontWeight?: number;
    color?: string;
}

export const UITableDateItem: FC<IProps> = (props) => {
    const { text } = props;

    const dateFormatter = (dateTime) => {
        const md: Moment = moment.utc(dateTime, 'YYYY-MM-DD');
        return md.format('MMM DD, YY');
    };

    return (
        <div>
            <Wrapper {...props}>
                <span>{dateFormatter(text)}</span>
            </Wrapper>
        </div>
    );
};

const defaultProps: IProps = {
    text: '2020-07-17T13:23:46.341992',
    fontFamily: FONT_REGULAR,
    fontSize: UITableConfig.RECORD_FONT_SIZE,
    fontWeight: FONT_WEIGHT_400,
    color: '#00000',
};

UITableDateItem.defaultProps = defaultProps;

export default UITableDateItem;
