import type { Meta, StoryObj } from '@storybook/react';
import { EnvelopeIcon } from '@heroicons/react/24/outline';

import { Input } from './Input';

const meta: Meta<typeof Input> = {
    title: 'shared/ui/Input',
    component: Input,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const BaseInput: Story = {
    args: {
        label: 'Username',
        placeholder: 'Enter your username',
    },
};

export const InputWithIcon: Story = {
    args: {
        label: 'Username',
        placeholder: 'Enter your email',
        icon: EnvelopeIcon,
    },
};

export const InputWithPasswordToggle: Story = {
    args: {
        label: 'Password',
        placeholder: 'Enter your password',
        type: 'password',
        showPasswordIcon: true,
    },
};

export const InputWithError: Story = {
    args: {
        label: 'Name',
        placeholder: 'Enter your name',
        isError: true,
        validationInformation: 'Please enter a valid name.',
    },
};
