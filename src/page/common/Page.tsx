import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import Content from './Content';
import Header from './Header';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

type Props = {
    layout?: any;
    children: ReactNode;
};

const Page: FC<Props> = (props) => {
    const { children } = props;

    return (
        <Wrapper>
            <Header />
            <Content>{children}</Content>
        </Wrapper>
    );
};

export default Page;
