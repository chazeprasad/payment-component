import React, { FC } from "react"
import styled from "styled-components"
import { UITableConfig } from "../ui-table-config"

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


type Props = {
    text: string
}

export const UITableTextItem: FC<Props> = (props) => {
    const { text } = props;
    return (
        <div >
            <Wrapper><span>{text}</span></Wrapper>
        </div>
        
    )
}