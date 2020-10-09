import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import {ReactComponent as LeftChevron}  from '../../media/image/chevron-left.svg'

const Wrapper = styled.div<Partial<Props>>`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border-radius: 2px;
    border: solid 1px #d9d9d9;
    background-color: #ffffff;
    margin-left: 5px;
    margin-right: 5px;
    cursor: pointer;
    &:hover {
          color: #1791ff;
      };
    &:focus {
        outline: 0;
      };

      ${(props: any) =>
        props.disabled && css`
            cursor: not-allowed;
            pointer-events: none;
        `};
  
`;

type Props = {
  disabled: boolean;
  onPress?: Function;
};

const PreviousButton: FC<Props> = ({ onPress, disabled}) => {
  return (<Wrapper onClick={() => {
    if(!disabled) onPress!()}
  } disabled={disabled}>
      <LeftChevron stroke={disabled ? '#d9d9d9' : '#000000'}/>
        
    </Wrapper>)
}

export default PreviousButton;