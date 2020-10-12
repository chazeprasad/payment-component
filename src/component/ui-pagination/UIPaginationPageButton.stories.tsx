import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import UIPaginationPageButton from './UIPaginationPageButton';

export default {
    title: 'Pagination/UIPaginationPageButton',
    component: UIPaginationPageButton,
    argTypes: {
        label: {
            control: {
                type: 'select',
                options: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
            },
        },
        fillColor: { control: 'color' },
        borderColor: { control: 'color' },
        borderRadius: {
            control: {
                type: 'range',
                min: 0,
                max: 30,
                step: 1,
            },
        },
        textColor: { control: 'color' },
        hoverColor: { control: 'color' },
    },
} as Meta;

// Stories
const Template: Story<any> = (args) => <UIPaginationPageButton {...args} />;

export const Page = Template.bind({});
Page.args = {};
