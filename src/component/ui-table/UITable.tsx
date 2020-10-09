/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { UITableHeaderCell } from './UITableHeaderCell';
import { UITableCell } from './UITableCell';
import { UITableRow } from './UITableRow';
import { UITableHeaderRow } from './UITableHeaderRow';
import { FONT_REGULAR, TableField, UITableConfig } from './ui-table-config';
import { Pagination } from '../pagination/Pagination';

const Table = styled.table`
    display: table;
    border: none;
    border-spacing: 0;
    /* border-collapse: collapse; */
    width: 100%;
    table-layout: auto;
`;
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    padding: 0;
    margin: 0;
    background-color: #ffffff;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px,
        rgba(0, 0, 0, 0.12) 0px 1px 8px 0px;
    border-radius: 4px;
    overflow: hidden;
`;
const PaginationWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 50px;
    background-color: #ffffff;
    margin-top: 32px;
    padding-right: 24px;
    margin-bottom: 24px;
`;

const PaginationDetails = styled.div`
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
`;

const TitleWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 50px;
    background-color: #ffffff;

    h4 {
        font-family: ${UITableConfig.TITLE_FONT_FAMILY};
        font-size: ${UITableConfig.TITLE_FONT_SIZE}px;
        font-weight: ${UITableConfig.TITLE_FONT_WEIGHT};
        color: ${UITableConfig.TITLE_TEXT_COLOR};
        padding: 0;
        margin: 0;
        margin-left: 56px;
    }
`;

interface ITransaction {
    amount: number;
    status: string;
    date: string;
    method: string;
}

const columnDefs = [
    { headerName: 'Amount', field: 'amount', type: TableField.NUMBER },
    { headerName: 'Status', field: 'status', type: TableField.STATUS_FLAG },
    { headerName: 'Method', field: 'method', type: TableField.TRANSACTION_METHOD },
    { headerName: 'Date', field: 'date', type: TableField.DATE },
];

const sortList = (property, order) => {
    const sortOrder = order || 1;

    return (a, b) => {
        // eslint-disable-next-line no-nested-ternary
        const result = a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
        return result * sortOrder;
    };
};

const UITable = (props) => {
    const { transactionList } = props;

    const transactionData: Array<ITransaction> = transactionList.map((x) => {
        const transaction: ITransaction = {
            amount: x.amount,
            status: x.status,
            date: x.date,
            method: `${x.bank} •••• ${x.last4}`,
        };

        return transaction;
    });

    const [sort, setSort] = useState({
        property: 'date',
        order: -1,
    });

    const [page, setPage] = useState(4);
    const [limit, setLimit] = useState(10);
    const totalPages = Math.ceil(transactionData.length / limit);
    const handlePages = (updatePage: number) => setPage(updatePage);

    const getPageRecords = () => {
        const start = (page - 1) * limit;
        let end = start + limit;
        if (end > transactionData.length - 1) end = transactionData.length - 1;

        return transactionData.sort(sortList(sort.property, sort.order)).slice(start, end);
    };

    const [tableData, setTableData] = useState({
        columnDefs,
        rowData: getPageRecords(),
    });

    useEffect(() => {
        if (transactionList && transactionList.length) {
            setTableData({
                columnDefs,
                rowData: getPageRecords(),
            });
        }
    }, [sort, page, transactionList]);

    const [selectedRowIndex, setSelectedRowIndex] = useState(1);

    const renderHeader = () => {
        return (
            <thead>
                <UITableHeaderRow>
                    {tableData.columnDefs.map((x, i) => (
                        <UITableHeaderCell
                            key={`head-${i}`}
                            sortActive={sort.property === x.field}
                            field={x.field}
                            sortOrder={sort.order}
                            onSortButtonPress={(p, o) => {
                                setSort({
                                    property: p,
                                    order: o,
                                });
                            }}
                            first={i === 0}
                            last={i === tableData.columnDefs.length - 1}
                            text={x.headerName}
                        />
                    ))}
                </UITableHeaderRow>
            </thead>
        );
    };

    const renderRecords = () => {
        return (
            <tbody>
                {tableData.rowData.map((row, i) => (
                    <UITableRow
                        key={`record-${i}`}
                        active={selectedRowIndex === i}
                        onPress={() => {
                            setSelectedRowIndex(i);
                        }}
                    >
                        {tableData.columnDefs.map((x, ci) => (
                            <UITableCell
                                key={`cell-${i + 1}${(i + 1) * (ci + 1)}`}
                                first={ci === 0}
                                last={ci === tableData.columnDefs.length - 1}
                                adjacent={selectedRowIndex - 1 === i}
                                active={selectedRowIndex === i}
                                text={tableData.rowData[i][x.field]}
                                cellType={tableData.columnDefs[ci].type}
                            />
                        ))}
                    </UITableRow>
                ))}
            </tbody>
        );
    };

    return (
        <Wrapper>
            <TitleWrapper>
                <h4>All Transactions</h4>
            </TitleWrapper>
            <Table>
                {renderHeader()}
                {renderRecords()}
            </Table>
            <PaginationWrapper>
                <PaginationDetails>
                    <span>{`Total ${transactionData.length} Payments`}</span>
                </PaginationDetails>
                <Pagination page={page} totalPages={totalPages} handlePagination={handlePages} />
            </PaginationWrapper>
        </Wrapper>
    );
};

export default UITable;
