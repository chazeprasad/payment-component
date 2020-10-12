import React, { useState, useEffect, useCallback, FC } from 'react';
import styled from 'styled-components';
import { Scrollbars } from 'react-custom-scrollbars';
import { ITransaction } from '../../store/domain/ITransaction';
import { UITableConfig, TableField, ITableConfig, FONT_REGULAR, FONT_WEIGHT_600 } from '../ui-table/ui-table-config';
import UITable from '../ui-table/UITable';
import { UIPagination } from '../ui-pagination/UIPagination';
import { ArrayUtil } from '../../util/array-util';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
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
    position: relative;

    @media (max-width: 600px) {
        justify-content: space-between;
    }
`;

const TopSectionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
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

const TableWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;
    background-color: #ffffff;
`;

const PaginationWrapper = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
`;

// const headerHeight = 48;
// const recordHeight = 38;

const config: Array<ITableConfig> = [
    { headerName: 'Amount', field: 'amount', type: TableField.CURRENCY },
    { headerName: 'Status', field: 'status', type: TableField.STATUS_FLAG },
    { headerName: 'Method', field: 'method', type: TableField.TRANSACTION_METHOD },
    { headerName: 'Date', field: 'date', type: TableField.DATE },
];

interface IProps {
    transactions: Array<ITransaction>;
    limit: number;
    headerHeight?: number;
    rowHeight?: number;
    headerFillColor?: string;
    headerTextColor?: string;
    headerFontFamily?: string;
    headerFontSize?: number;
    headerFontWeight?: number;
    sortIconColor?: string;
    sortIconSelectedColor?: string;
}

const UIPayment: FC<IProps> = ({
    transactions,
    limit,
    rowHeight,
    headerHeight,
    headerFillColor,
    headerTextColor,
    headerFontFamily,
    headerFontSize,
    headerFontWeight,
    sortIconColor,
    sortIconSelectedColor,
}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [tableData, setTableData] = useState<Array<ITransaction>>([]);
    const [sort, setSort] = useState({
        property: 'date',
        order: -1,
    });

    const getRecords = useCallback(
        (list: Array<any>, pageIndex: number, pageLimit: number, sortBy: string, sortOrder: number) => {
            const start = (pageIndex - 1) * pageLimit;
            let end = start + pageLimit;
            if (end > list.length - 1) end = list.length - 1;

            return list.sort(ArrayUtil.SortByProperty(sortBy, sortOrder)).slice(start, end);
        },
        [],
    );

    const onPaginationChange = (page: number) => setCurrentPage(page);

    const onSortChange = (property: string, order: number) => {
        setSort({
            property,
            order,
        });

        const list = getRecords([...transactions], currentPage, limit, property, order) as Array<ITransaction>;

        setTableData(list);
    };

    useEffect(() => {
        if (transactions && transactions.length) {
            const list = getRecords([...transactions], currentPage, limit, sort.property, sort.order) as Array<
                ITransaction
            >;

            setTableData(list);
        }
    }, [currentPage, getRecords, limit, sort.order, sort.property, transactions]);

    // const bodyHeight = (recordHeight + 2) * limit;
    // const bodyHeight = (recordHeight + 2) * 10;
    // const tableHeight = headerHeight + bodyHeight + 16;

    return (
        <Wrapper>
            <TopSectionWrapper>
                <TitleWrapper>
                    <h4>All Transactions</h4>
                </TitleWrapper>
                <TableWrapper>
                    <Scrollbars autoHide style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                        <UITable
                            config={config}
                            data={tableData}
                            rowHeight={rowHeight}
                            onSortChange={onSortChange}
                            headerHeight={headerHeight}
                            headerFillColor={headerFillColor}
                            headerTextColor={headerTextColor}
                            headerFontFamily={headerFontFamily}
                            headerFontSize={headerFontSize}
                            headerFontWeight={headerFontWeight}
                            sortIconColor={sortIconColor}
                            sortIconSelectedColor={sortIconSelectedColor}
                        />
                    </Scrollbars>
                </TableWrapper>
            </TopSectionWrapper>

            <PaginationWrapper>
                <UIPagination
                    currentPage={currentPage}
                    numItems={transactions.length}
                    pageLimit={limit || 10}
                    onPaginationChange={onPaginationChange}
                />
            </PaginationWrapper>
        </Wrapper>
    );
};

const defaultProps: IProps = {
    transactions: [],
    limit: 10,
    headerHeight: 48,
    rowHeight: 38,
    headerFillColor: '#fafafa',
    headerTextColor: '#1A1A1A',
    headerFontFamily: FONT_REGULAR,
    headerFontSize: 14,
    headerFontWeight: FONT_WEIGHT_600,
    sortIconColor: UITableConfig.HEADER_SORT_ICON_NORMAL_COLOR,
    sortIconSelectedColor: UITableConfig.HEADER_SORT_ICON_SELECTED_COLOR,
};

UIPayment.defaultProps = defaultProps;

export default React.memo(UIPayment);
