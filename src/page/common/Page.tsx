import React, { FC } from 'react';
import Content from './Content';
import Header from './Header';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

type Props = {
    layout?: any,
};

const Page: FC<Props> = (props) => {

    const { children } = props;

    return (
        <Wrapper >
            <Header />
            <Content>
                {children}
            </Content>
        </Wrapper>
    );
};

export default Page;