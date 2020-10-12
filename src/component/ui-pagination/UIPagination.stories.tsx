import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import UIPagination from './UIPagination';

export default {
    title: 'Pagination/UIPagination',
    component: UIPagination,
    argTypes: {
        pageLimit: {
            control: {
                type: 'select',
                options: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16'],
            },
        },
        currentPage: { control: 'number' },
        numItems: { control: 'number' },
    },
} as Meta;

// Stories
const Template: Story<any> = (args) => <UIPagination {...args} />;

export const Paginaton = Template.bind({});
Paginaton.args = {};
