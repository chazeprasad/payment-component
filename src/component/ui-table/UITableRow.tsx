import React, { FC } from 'react';
import styled, { css, StyledComponent } from 'styled-components';
import { UITableConfig } from './ui-table-config';

interface Props {
    active: boolean,
    
    onPress?: Function,
}; 

const Row = styled.tr<Props>`
    display: table-row;
    flex-direction: row;
    height: 38px;
    justify-content: flex-start;
    align-items: center;
    background-color: #ffffff;
    transition: background-color 400ms;
    cursor: pointer;
    border-top: solid 0.5px rgba(151,151,151,0.0);
    border-bottom: solid 0.5px rgba(151,151,151,0.0);

    ${(props: any) =>
        props.active &&
        css`
            background-color: rgba(246, 246, 255, 0.5);
            
    `}

    :hover{
        background-color: rgba(246, 246, 255, 0.5);
    }
`;



export const UITableRow: FC<Props> = (props) => {
    const { children, onPress, active } = props;
    return (
        <Row active={active} onClick={() => {
            onPress!()
        }}>{children}</Row>
    )
}