import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import UITableCurrencyItem from './UITableCurrencyItem';

export default {
    title: 'Table/Cell/UITableCurrencyItem',
    component: UITableCurrencyItem,
    argTypes: {
        color: { control: 'color' },
        fontWeight: {
            control: {
                type: 'select',
                options: [300, 400, 500, 600, 700, 800, 900],
            },
        },
        fontFamily: {
            control: {
                type: 'select',
                options: ['ProximaNovaRegular', 'ProximaNovaSemiBold'],
            },
        },
        fontSize: {
            control: {
                type: 'range',
                min: 10,
                max: 32,
                step: 1,
            },
        },
    },
} as Meta;

// Stories
const Template: Story<any> = (args) => <UITableCurrencyItem {...args} />;

export const CurrencyItem = Template.bind({});
CurrencyItem.args = {};
