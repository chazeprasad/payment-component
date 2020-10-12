import React, { FC } from 'react';
import styled from 'styled-components';
import { UITableConfig, FONT_REGULAR } from '../ui-table-config';

const Wrapper = styled.div<Partial<IProps>>`
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

const UITableTextItem: FC<IProps> = (props) => {
    const { text, fontFamily, fontSize, fontWeight, color } = props;
    return (
        <div>
            <Wrapper fontFamily={fontFamily} fontSize={fontSize} fontWeight={fontWeight} color={color}>
                <span>{text}</span>
            </Wrapper>
        </div>
    );
};

const defaultProps: IProps = {
    text: '',
    fontFamily: FONT_REGULAR,
    fontSize: UITableConfig.RECORD_FONT_SIZE,
    fontWeight: UITableConfig.RECORD_FONT_WEIGHT,
    color: '#434343',
};

UITableTextItem.defaultProps = defaultProps;

export default UITableTextItem;
