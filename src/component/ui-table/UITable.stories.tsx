import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import UITable from './UITable';
import FakeTransactionData from '../../media/data/transaction-data.json';
import { ITableConfig, TableField } from './ui-table-config';
import { extractTransactionData } from '../../store/saga/PaymentSaga';

export default {
    title: 'Table/UITable',
    component: UITable,
    argTypes: {
        rowHeight: {
            control: {
                type: 'range',
                min: 24,
                max: 64,
                step: 1,
            },
        },
        headerHeight: {
            control: {
                type: 'range',
                min: 24,
                max: 64,
                step: 1,
            },
        },
        headerFillColor: { control: 'color' },
        headerTextColor: { control: 'color' },
        sortIconColor: { control: 'color' },
        sortIconSelectedColor: { control: 'color' },
        headerFontWeight: {
            control: {
                type: 'select',
                options: [300, 400, 500, 600, 700, 800, 900],
            },
        },
        headerFontFamily: {
            control: {
                type: 'select',
                options: ['ProximaNovaRegular', 'ProximaNovaSemiBold'],
            },
        },
        headerFontSize: {
            control: {
                type: 'range',
                min: 10,
                max: 64,
                step: 1,
            },
        },
    },
} as Meta;

// Stories
const Template: Story<any> = (args) => <UITable {...args} />;

const config4Column: Array<ITableConfig> = [
    { headerName: 'Amount', field: 'amount', type: TableField.CURRENCY },
    { headerName: 'Status', field: 'status', type: TableField.STATUS_FLAG },
    { headerName: 'Method', field: 'method', type: TableField.TRANSACTION_METHOD },
    { headerName: 'Date', field: 'date', type: TableField.DATE },
];

const tableData = extractTransactionData(FakeTransactionData.slice(0, 10));

export const Table = Template.bind({});
Table.storyName = 'Table - 4 Columns';
Table.args = {
    config: config4Column,
    data: tableData,
    sortBy: 'date',
    sortOrder: -1,
};

const config3Column: Array<ITableConfig> = [
    { headerName: 'Amount', field: 'amount', type: TableField.CURRENCY },
    { headerName: 'Status', field: 'status', type: TableField.STATUS_FLAG },
    { headerName: 'Date', field: 'date', type: TableField.DATE },
];

export const Table2 = Template.bind({});
Table2.storyName = 'Table - 3 Columns';
Table2.args = {
    config: config3Column,
    data: tableData,
    sortBy: 'date',
    sortOrder: -1,
};
