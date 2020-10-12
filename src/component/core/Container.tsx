import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { ThemeColor } from '../../config/theme-config';
import '../../media/scss/font.scss';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    padding: 24px;
    box-sizing: border-box;
    background-color: ${ThemeColor.GRAY_NURSE};

    @media (max-width: 600px) {
        padding: 8px;
    }
`;

interface IProps {
    children?: ReactNode;
}

const Container: FC<IProps> = ({ children }) => <Wrapper>{children}</Wrapper>;

export default Container;
