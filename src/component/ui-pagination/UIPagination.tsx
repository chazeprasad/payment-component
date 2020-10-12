import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import UIPaginationPageButton from './UIPaginationPageButton';
import UIPaginationNavButton from './UIPaginationNavButton';
import { ReactComponent as RightChevron } from '../../media/image/chevron-right.svg';
import { ReactComponent as LeftChevron } from '../../media/image/chevron-left.svg';
import { FONT_REGULAR } from '../ui-table/ui-table-config';
import UIPaginationSeparatorButton from './UIPaginationSeparatorButton';

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

    @media (max-width: 600px) {
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

    @media (max-width: 600px) {
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
    @media (max-width: 600px) {
        display: none;
    }
`;
const ChevronWrapperMobile = styled.div`
    display: none;
    @media (max-width: 600px) {
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
    padding-right: 0px;

    @media (max-width: 600px) {
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
    currentPage: number;
    pageLimit: number;
    numItems: number;
    onPaginationChange?: (page: number) => void;
}

export const UIPagination: React.FC<IProps> = ({ currentPage, pageLimit, onPaginationChange, numItems }) => {
    const [page, setPage] = useState(currentPage);
    const [totalPages, setTotalPages] = useState(Math.ceil(numItems / pageLimit));

    useEffect(() => {
        setTotalPages(Math.ceil(numItems / pageLimit));
    }, [pageLimit, numItems]);

    return (
        <Wrapper>
            <PaginationDetailsWrapper>
                <div>
                    <span>{`Total ${numItems} Payments`}</span>
                </div>
            </PaginationDetailsWrapper>

            <ControlWrapper>
                <UIPaginationNavButton
                    disabled={page === 1}
                    onPress={() => {
                        setPage(page - 1);
                        if (onPaginationChange) onPaginationChange(page - 1);
                    }}
                >
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

                <UIPaginationPageButton
                    onPress={() => {
                        setPage(1);

                        if (onPaginationChange) onPaginationChange(1);
                    }}
                    active={page === 1}
                    label={'1'}
                />

                {page > 3 && <UIPaginationSeparatorButton borderColor={'#ffffff'} />}

                {page === totalPages && totalPages > 3 && (
                    <UIPaginationPageButton
                        onPress={() => {
                            setPage(page - 2);

                            if (onPaginationChange) onPaginationChange(page - 2);
                        }}
                        active={false}
                        label={(page - 2).toString()}
                    />
                )}

                {page > 2 && (
                    <UIPaginationPageButton
                        onPress={() => {
                            setPage(page - 1);

                            if (onPaginationChange) onPaginationChange(page - 1);
                        }}
                        active={false}
                        label={(page - 1).toString()}
                    />
                )}

                {page !== 1 && page !== totalPages && (
                    <UIPaginationPageButton
                        onPress={() => {
                            setPage(page);

                            if (onPaginationChange) onPaginationChange(page);
                        }}
                        active
                        label={page.toString()}
                    />
                )}

                {page < totalPages - 1 && (
                    <UIPaginationPageButton
                        onPress={() => {
                            setPage(page + 1);

                            if (onPaginationChange) onPaginationChange(page + 1);
                        }}
                        active={false}
                        label={(page + 1).toString()}
                    />
                )}

                {page === 1 && totalPages > 3 && (
                    <UIPaginationPageButton
                        onPress={() => {
                            setPage(page + 2);

                            if (onPaginationChange) onPaginationChange(page + 2);
                        }}
                        active={false}
                        label={(page + 2).toString()}
                    />
                )}

                {page < totalPages - 2 && <UIPaginationSeparatorButton borderColor="#ffffff" />}

                <UIPaginationPageButton
                    onPress={() => {
                        setPage(totalPages);

                        if (onPaginationChange) onPaginationChange(totalPages);
                    }}
                    active={page === totalPages}
                    label={totalPages.toString()}
                />

                <PageNumberWrapper>{page}</PageNumberWrapper>

                <UIPaginationNavButton
                    disabled={page === totalPages}
                    onPress={() => {
                        setPage(page + 1);

                        if (onPaginationChange) onPaginationChange(page + 1);
                    }}
                >
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

const defaultProps: IProps = {
    currentPage: 1,
    pageLimit: 10,
    numItems: 60,
};

UIPagination.defaultProps = defaultProps;

export default React.memo(UIPagination);
