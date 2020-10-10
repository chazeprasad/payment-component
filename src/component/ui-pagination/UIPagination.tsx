import React from 'react';
import styled from 'styled-components';
import SeparatorButton from './UIPaginationSeparatorButton';
import UIPaginationPageButton from './UIPaginationPageButton';
import UIPaginationNavButton from './UIPaginationNavButton';
import { ReactComponent as RightChevron } from '../../media/image/chevron-right.svg';
import { ReactComponent as LeftChevron } from '../../media/image/chevron-left.svg';
import { FONT_REGULAR } from '../ui-table/ui-table-config';

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    background-color: #ffffff;
    /* padding: 16px; */
    margin-top: 32px;
    margin-bottom: 24px;
    margin-right: 24px;
    margin-left: 24px;
    position: relative;

    @media (max-width: 425px) {
        padding-top: 8px;
        margin-top: 8px;
        margin-right: 0px;
        margin-left: 0px;
        margin-bottom: 0px;
        padding-bottom: 4px;
        border-top: solid 0.5px rgba(151, 151, 151, 0.33);
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
    }
`;

const ControlWrapper = styled.div`
    padding: 0 0;
    margin: 0;
    display: flex;
    justify-content: center;
    background-color: #ffffff;
`;

const PageNumberWrapper = styled.div`
    display: none;
    font-family: 'ProximaNovaSemiBold';
    font-size: 16px;
    font-weight: 600;

    @media (max-width: 425px) {
        display: inline-flex;
        height: 36px;
        width: 16px;
        justify-content: center;
        align-items: center;
        color: #37486e;
    }
`;

const ChevronWrapper = styled.div`
    display: block;
    @media (max-width: 425px) {
        display: none;
    }
`;
const ChevronWrapperMobile = styled.div`
    display: none;
    @media (max-width: 425px) {
        display: block;
    }
`;

const PaginationDetailsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 50px;
    background-color: #ffffff;
    padding-right: 24px;

    @media (max-width: 425px) {
        padding-right: 0px;
    }

    > div {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        width: 100%;
        background-color: #ffffff;
        margin-right: 8px;

        span {
            font-family: ${FONT_REGULAR};
            font-size: 14px;
            font-weight: 400;
            color: #000000;
            padding: 0;
            margin: 0;
            margin-left: 56px;
        }
    }
`;

export interface IProps {
    page: number;
    totalPages: number;
    numItems: number;
    handlePagination: (page: number) => void;
}

export const UIPagination: React.FC<IProps> = ({ page, totalPages, handlePagination, numItems }) => {
    return (
        <Wrapper>
            <PaginationDetailsWrapper>
                <div>
                    <span>{`Total ${numItems} Payments`}</span>
                </div>
            </PaginationDetailsWrapper>

            <ControlWrapper>
                <UIPaginationNavButton disabled={page === 1} onPress={() => handlePagination(page - 1)}>
                    <ChevronWrapper>
                        <LeftChevron stroke={page === 1 ? '#d9d9d9' : '#000000'} />
                    </ChevronWrapper>
                    <ChevronWrapperMobile>
                        <LeftChevron
                            stroke={page === 1 ? '#d9d9d9' : '#1791ff'}
                            strokeWidth={1.5}
                            width={32}
                            height={32}
                        />
                    </ChevronWrapperMobile>
                </UIPaginationNavButton>

                <UIPaginationPageButton onPress={() => handlePagination(1)} active={page === 1} page={1} />

                {page > 3 && <SeparatorButton />}

                {page === totalPages && totalPages > 3 && (
                    <UIPaginationPageButton onPress={() => handlePagination(page - 2)} active={false} page={page - 2} />
                )}

                {page > 2 && (
                    <UIPaginationPageButton onPress={() => handlePagination(page - 1)} active={false} page={page - 1} />
                )}

                {page !== 1 && page !== totalPages && (
                    <UIPaginationPageButton onPress={() => handlePagination(page)} active page={page} />
                )}

                {page < totalPages - 1 && (
                    <UIPaginationPageButton onPress={() => handlePagination(page + 1)} active={false} page={page + 1} />
                )}

                {page === 1 && totalPages > 3 && (
                    <UIPaginationPageButton onPress={() => handlePagination(page + 2)} active={false} page={page + 2} />
                )}

                {page < totalPages - 2 && <SeparatorButton />}

                <UIPaginationPageButton
                    onPress={() => handlePagination(totalPages)}
                    active={page === totalPages}
                    page={totalPages}
                />

                <PageNumberWrapper>{page}</PageNumberWrapper>

                <UIPaginationNavButton disabled={page === totalPages} onPress={() => handlePagination(page + 1)}>
                    <ChevronWrapper>
                        <RightChevron stroke={page === totalPages ? '#d9d9d9' : '#000000'} />
                    </ChevronWrapper>
                    <ChevronWrapperMobile>
                        <RightChevron
                            stroke={page === totalPages ? '#d9d9d9' : '#1791ff'}
                            strokeWidth={1.5}
                            width={32}
                            height={32}
                        />
                    </ChevronWrapperMobile>
                </UIPaginationNavButton>
            </ControlWrapper>
        </Wrapper>
    );
};

export default React.memo(UIPagination);
