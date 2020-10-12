import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import UIPaginationSeparatorButton from './UIPaginationSeparatorButton';

export default {
    title: 'Pagination/UIPaginationSeparatorButton',
    component: UIPaginationSeparatorButton,
    argTypes: {
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
const Template: Story<any> = (args) => <UIPaginationSeparatorButton {...args} />;

export const Separator = Template.bind({});
Separator.args = {};
