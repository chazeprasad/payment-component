import React from 'react';
import styled from 'styled-components';
import UITable from '../../component/ui-table/UITable';
import { ThemeColor } from '../../config/theme-config';
import { useTransactions } from '../../hook/index';

const PageWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    min-width: 100vw;
    min-height: 100vh;
    background-color: ${ThemeColor.GRAY_NURSE};
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: row;
    min-width: 100vw;
    min-height: 100vh;
    padding: 24px;
`;    

const PaymentPage = () => {
    const transactionList = useTransactions();
    
    return (
        <PageWrapper>
            <ContentWrapper>
                <UITable transactionList={transactionList} />
            </ContentWrapper>
        </PageWrapper>
    );
};

export default PaymentPage;