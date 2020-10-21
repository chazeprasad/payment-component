import React, { useState, useEffect, FC } from 'react';
import styled from 'styled-components';
import { UITableHeaderCell } from './UITableHeaderCell';
import { ITransaction } from '../../store/domain/ITransaction';
import UITableHeaderRow from './UITableHeaderRow';
import UITableRow from './UITableRow';
import UITableCell from './UITableCell';
import { ITableConfig, FONT_REGULAR, FONT_WEIGHT_600, UITableConfig } from './ui-table-config';
import { ArrayUtil } from '../../util/array-util';

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    min-width: 840px;
    background: #ffffff;
`;

const Table = styled.table`
    display: table;
    border: none;
    border-spacing: 0;
    /* border-collapse: collapse; */
    width: 100%;
    table-layout: auto;
    padding: 0px;
    overflow: auto;
`;

interface IProps {
    config: Array<ITableConfig>;
    data: Array<ITransaction>;
    sortBy?: string;
    sortOrder?: number;
    headerHeight?: number;
    rowHeight?: number;
    headerFillColor?: string;
    headerTextColor?: string;
    headerFontFamily?: string;
    headerFontSize?: number;
    headerFontWeight?: number;
    sortIconColor?: string;
    sortIconSelectedColor?: string;
    onSortChange?: (string, number) => void;
}

const UITable: FC<IProps> = ({
    config,
    data,
    onSortChange,
    sortBy,
    sortOrder,
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
    const [selectedRowIndex, setSelectedRowIndex] = useState(4);
    const [records, setRecords] = useState<Array<ITransaction>>([]);
    const [sort, setSort] = useState<any>({
        property: '',
        order: -1,
    });

    useEffect(() => {
        setSort({
            property: sortBy || '',
            order: sortOrder || -1,
        });
        if (data) setRecords([...data]);
    }, [config, data, setSort, sortBy, sortOrder]);

    const renderHeader = () => {
        return (
            <thead>
                <UITableHeaderRow height={headerHeight} fillColor={headerFillColor}>
                    {config &&
                        config.map((x, i) => (
                            <UITableHeaderCell
                                key={`head-${i}`}
                                fillColor={headerFillColor}
                                sortActive={sort.property === x.field}
                                field={x.field}
                                sortOrder={sort.order}
                                onSortButtonPress={(p, o) => {
                                    setSort({
                                        property: p,
                                        order: o,
                                    });
                                    if (onSortChange) {
                                        onSortChange(p, o);
                                    } else {
                                        const list = records ? records.sort(ArrayUtil.SortByProperty(p, o)) : [];
                                        setRecords([...list]);
                                    }
                                }}
                                first={i === 0}
                                last={i === config.length - 1}
                                text={x.headerName}
                                color={headerTextColor}
                                fontFamily={headerFontFamily}
                                fontSize={headerFontSize}
                                fontWeight={headerFontWeight}
                                sortIconColor={sortIconColor}
                                sortIconSelectedColor={sortIconSelectedColor}
                            />
                        ))}
                </UITableHeaderRow>
            </thead>
        );
    };

    const renderRecords = () => {
        return (
            <tbody>
                {records &&
                    records.map((row, i) => (
                        <UITableRow
                            key={`record-${i}`}
                            active={selectedRowIndex === i}
                            onPress={() => {
                                setSelectedRowIndex(i);
                            }}
                        >
                            {config.map((x, ci) => (
                                <UITableCell
                                    key={`cell-${i + 1}${(i + 1) * (ci + 1)}`}
                                    first={ci === 0}
                                    last={ci === config.length - 1}
                                    adjacent={selectedRowIndex - 1 === i}
                                    active={selectedRowIndex === i}
                                    text={records[i][x.field]}
                                    cellType={config[ci].type}
                                    height={rowHeight}
                                />
                            ))}
                        </UITableRow>
                    ))}
            </tbody>
        );
    };

    return (
        <Wrapper>
            <Table>
                {renderHeader()}
                {records && renderRecords()}
            </Table>
        </Wrapper>
    );
};

const defaultProps: IProps = {
    config: [],
    data: [],
    sortBy: '',
    sortOrder: -1,
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

UITable.defaultProps = defaultProps;

export default React.memo(UITable);
