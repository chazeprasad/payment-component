import React, { useState, FC } from 'react';
import styled from 'styled-components';
import { UITableHeaderCell } from './UITableHeaderCell';
import { UITableCell } from './UITableCell';
import { UITableRow } from './UITableRow';
import { UITableHeaderRow } from './UITableHeaderRow';
import { ITransaction } from '../../store/domain/ITransaction';

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
`;

interface IProps {
    config: any;
    data: Array<ITransaction>;
    sort: any;
    onSortChange?: (string, number) => void;
}

const UITable: FC<IProps> = ({ config, data, onSortChange, sort }) => {
    const [selectedRowIndex, setSelectedRowIndex] = useState(4);

    console.log('sort');
    console.log(sort);

    const renderHeader = () => {
        return (
            <thead>
                <UITableHeaderRow>
                    {config &&
                        config.map((x, i) => (
                            <UITableHeaderCell
                                key={`head-${i}`}
                                sortActive={sort.property === x.field}
                                field={x.field}
                                sortOrder={sort.order}
                                onSortButtonPress={(p, o) => {
                                    if (onSortChange) onSortChange(p, o);
                                }}
                                first={i === 0}
                                last={i === config.length - 1}
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
                {data &&
                    data.map((row, i) => (
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
                                    text={data[i][x.field]}
                                    cellType={config[ci].type}
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
                {renderRecords()}
            </Table>
        </Wrapper>
    );
};

export default React.memo(UITable);
