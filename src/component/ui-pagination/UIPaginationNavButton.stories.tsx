import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import UIPaginationNavButton from './UIPaginationNavButton';
import { ReactComponent as RightChevron } from '../../media/image/chevron-right.svg';
import { ReactComponent as LeftChevron } from '../../media/image/chevron-left.svg';

export default {
    title: 'Pagination/UIPaginationNavButton',
    component: UIPaginationNavButton,
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
        iconColorEnabled: { control: 'color' },
        iconColorDisabled: { control: 'color' },
    },
} as Meta;

// Stories
const Template: Story<any> = (args) => <UIPaginationNavButton {...args}></UIPaginationNavButton>;

export const Next = Template.bind({});
Next.args = { disabled: false, children: <RightChevron /> };

export const Previous = Template.bind({});
Previous.args = { disabled: false, children: <LeftChevron /> };
