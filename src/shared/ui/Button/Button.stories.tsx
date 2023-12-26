import type { Meta, StoryObj } from '@storybook/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/outline';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
    title: 'shared/ui/Button',
    component: Button,
    args: {
        children: 'Button',
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        variant: 'primary',
    },
};

export const PrimaryWithIcons: Story = {
    args: {
        variant: 'primary',
        startIcon: <StarIcon />,
        endIcon: <ChevronDownIcon />,
    },
};

export const OutlineWithIcons: Story = {
    args: {
        variant: 'outline',
        startIcon: <StarIcon />,
        endIcon: <ChevronDownIcon />,
    },
};

export const TextWithIcons: Story = {
    args: {
        variant: 'text',
        startIcon: <StarIcon />,
        endIcon: <ChevronDownIcon />,
    },
};

export const PrimaryDisabled: Story = {
    args: {
        variant: 'primary',
        disabled: true,
    },
};

export const OutlineDisabled: Story = {
    args: {
        variant: 'outline',
        disabled: true,
    },
};

export const TextDisabled: Story = {
    args: {
        variant: 'text',
        disabled: true,
    },
};

export const Outline: Story = {
    args: {
        variant: 'outline',
    },
};

export const Text: Story = {
    args: {
        variant: 'text',
    },
};

export const PrimaryXS: Story = {
    args: {
        variant: 'primary',
        size: 'xs',
    },
};

export const OutlineXS: Story = {
    args: {
        variant: 'outline',
        size: 'xs',
    },
};

export const TextXS: Story = {
    args: {
        variant: 'text',
        size: 'xs',
    },
};

export const PrimarySM: Story = {
    args: {
        variant: 'primary',
        size: 'sm',
    },
};

export const OutlineSM: Story = {
    args: {
        variant: 'outline',
        size: 'sm',
    },
};

export const TextSM: Story = {
    args: {
        variant: 'text',
        size: 'sm',
    },
};

export const PrimaryBase: Story = {
    args: {
        variant: 'primary',
        size: 'base',
    },
};

export const OutlineBase: Story = {
    args: {
        variant: 'outline',
        size: 'base',
    },
};

export const TextBase: Story = {
    args: {
        variant: 'text',
        size: 'base',
    },
};

export const PrimaryLG: Story = {
    args: {
        variant: 'primary',
        size: 'lg',
    },
};

export const OutlineLG: Story = {
    args: {
        variant: 'outline',
        size: 'lg',
    },
};

export const TextLG: Story = {
    args: {
        variant: 'text',
        size: 'lg',
    },
};

export const PrimaryXL: Story = {
    args: {
        variant: 'primary',
        size: 'xl',
    },
};

export const OutlineXL: Story = {
    args: {
        variant: 'outline',
        size: 'xl',
    },
};

export const TextXL: Story = {
    args: {
        variant: 'text',
        size: 'xl',
    },
};
