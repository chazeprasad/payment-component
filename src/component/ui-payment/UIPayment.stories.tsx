import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import UIPayment from './UIPayment';
import FakeTransactionData from '../../media/data/transaction-data.json';
import { extractTransactionData } from '../../store/saga/PaymentSaga';

export default {
    title: 'Payment/UIPayment',
    component: UIPayment,
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
        limit: {
            control: {
                type: 'select',
                options: [5, 10, 20, 50, 100],
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
const Template: Story<any> = (args) => <UIPayment {...args} />;

const tableData = extractTransactionData(FakeTransactionData.slice(0));

export const Payment = Template.bind({});
Payment.storyName = 'Payment Listing';
Payment.args = {
    transactions: tableData,
    limit: 10,
};
