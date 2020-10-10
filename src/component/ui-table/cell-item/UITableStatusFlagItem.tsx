import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import { UITableConfig, TableFlag } from '../ui-table-config';

const FlagColor = {
    [TableFlag.SUCCEEDED]: '#ececff',
    [TableFlag.FAILED]: '#ffdfb1',
    [TableFlag.DISPUTED]: '#ffdfb1',
    [TableFlag.CANCELED]: '#e2e2e2',
};

const Wrapper = styled.div<Partial<IProps>>`
    display: inline-flex;
    height: 21px;
    padding: 1px 20px;
    border-radius: 12px;
    flex-direction: row;
    align-items: center;

    ${(props: any) =>
        css`
            background-color: ${FlagColor[props.text.toLowerCase()]};
        `};

    span {
        font-family: ${UITableConfig.RECORD_FONT_FAMILY};
        font-size: ${UITableConfig.RECORD_FONT_SIZE}px;
        font-weight: 600;
        color: ${UITableConfig.RECORD_TEXT_COLOR};
        margin: 0;
        padding: 0;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-transform: capitalize;
    }
`;

interface IProps {
    text: string;
}

export const UITableStatusFlagItem: FC<IProps> = (props) => {
    const { text } = props;
    return (
        <Wrapper text={text}>
            <span>{text.toLowerCase()}</span>
        </Wrapper>
    );
};
