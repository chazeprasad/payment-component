import React, { FC } from 'react';
import styled from 'styled-components';
import * as moment from 'moment';
import { Moment } from 'moment';
import { UITableConfig } from '../ui-table-config';

const Wrapper = styled.div`
    span {
        font-family: ${UITableConfig.RECORD_FONT_FAMILY};
        font-size: ${UITableConfig.RECORD_FONT_SIZE}px;
        font-weight: ${UITableConfig.RECORD_FONT_WEIGHT};
        color: #000000;
        margin: 0;
        padding: 0;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
    }
`;

type Props = {
    text: string;
};

const dateFormatter = (dateTime) => {
    const md: Moment = moment.utc(dateTime, 'YYYY-MM-DD');
    return md.format('MMM DD, YY');
};

export const UITableDateItem: FC<Props> = (props) => {
    const { text } = props;

    return (
        <div>
            <Wrapper>
                <span>{dateFormatter(text)}</span>
            </Wrapper>
        </div>
    );
};
