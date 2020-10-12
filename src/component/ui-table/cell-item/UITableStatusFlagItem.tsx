import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import { UITableConfig, TableFlag, FONT_WEIGHT_600, FONT_SEMIBOLD } from '../ui-table-config';

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
        text-transform: capitalize;
    }
`;

interface IProps {
    text: string;
    fontFamily?: string;
    fontSize?: number;
    fontWeight?: number;
    color?: string;
}

const UITableStatusFlagItem: FC<IProps> = (props) => {
    const { text } = props;
    return (
        <Wrapper {...props}>
            <span>{text.toLowerCase()}</span>
        </Wrapper>
    );
};

const defaultProps: IProps = {
    text: 'SUCCEEDED',
    fontFamily: FONT_SEMIBOLD,
    fontSize: UITableConfig.RECORD_FONT_SIZE,
    fontWeight: FONT_WEIGHT_600,
    color: UITableConfig.RECORD_TEXT_COLOR,
};

UITableStatusFlagItem.defaultProps = defaultProps;

export default UITableStatusFlagItem;
