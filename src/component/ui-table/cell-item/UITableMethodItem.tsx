import React, { FC } from 'react';
import styled from 'styled-components';
import { FONT_REGULAR, UITableConfig, FONT_WEIGHT_400 } from '../ui-table-config';

const Wrapper = styled.div<IProps>`
    span {
        font-family: ${(props) => props.fontFamily};
        font-size: ${(props) => props.fontSize}px;
        font-weight: ${(props) => props.fontWeight};
        color: ${(props) => props.color};
        color: #272727;
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

const UITableMethodItem: FC<IProps> = (props) => {
    const { text } = props;
    return (
        <div>
            <Wrapper {...props}>
                <span>{text}</span>
            </Wrapper>
        </div>
    );
};

const defaultProps: IProps = {
    text: 'Citibank Visa •••• 5284',
    fontFamily: FONT_REGULAR,
    fontSize: 16,
    fontWeight: FONT_WEIGHT_400,
    color: UITableConfig.RECORD_TEXT_COLOR,
};

UITableMethodItem.defaultProps = defaultProps;

export default UITableMethodItem;
