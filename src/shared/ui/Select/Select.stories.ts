import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Select } from './Select';

const meta: Meta<typeof Select> = {
    title: 'shared/ui/Select',
    component: Select,
    args: {
        label: 'Select Color',
        options: [
            { label: 'Red', value: 'red' },
            { label: 'Green', value: 'green' },
            { label: 'Blue', value: 'blue' },
        ],
        value: { label: 'Yellow', value: 'yellow' },
        multiple: false,
        onChange: action('onChange'),
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

// TS2322: Type {} is not assignable to type never

export const BasicSelect: Story = {
    args: {},
};

export const SelectWithArrowIcon: Story = {
    args: {
        showArrowIcon: true,
    },
};

export const SelectWithDefaultValue: Story = {
    args: {
        defaultValue: 'Select your favorite fruit',
    },
};

export const SelectWithError: Story = {
    args: {
        value: {},
        isError: true,
        validationInformation: 'Please select a country',
    },
};

export const MultiSelect: Story = {
    args: {
        value: [
            { label: 'Yellow', value: 'yellow' },
            { label: 'Pink', value: 'pink' },
        ],
        multiple: true,
    },
};
