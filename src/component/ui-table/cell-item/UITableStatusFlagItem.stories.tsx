import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import UITableStatusFlagItem from './UITableStatusFlagItem';

export default {
    title: 'Table/Cell/UITableStatusFlagItem',
    component: UITableStatusFlagItem,
    argTypes: {
        color: { control: 'color' },
        text: {
            control: {
                type: 'select',
                options: ['SUCCEEDED', 'FAILED', 'DISPUTED', 'CANCELED'],
            },
        },
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
const Template: Story<any> = (args) => <UITableStatusFlagItem {...args} />;

export const StatusFlagItem = Template.bind({});
StatusFlagItem.args = {};
