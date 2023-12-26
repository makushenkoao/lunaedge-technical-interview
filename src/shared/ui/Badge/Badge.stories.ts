import type { Meta, StoryObj } from '@storybook/react';

import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
    title: 'shared/ui/Badge',
    component: Badge,
    args: {
        title: 'Badge',
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
    args: {
        type: 'base',
    },
};

export const Notification: Story = {
    args: {
        type: 'notification',
    },
};

export const Delete: Story = {
    args: {
        type: 'delete',
    },
};

export const GrayBadge: Story = {
    args: {
        variant: 'gray',
    },
};

export const RedBadge: Story = {
    args: {
        variant: 'red',
    },
};

export const YellowBadge: Story = {
    args: {
        variant: 'yellow',
    },
};

export const BlueBadge: Story = {
    args: {
        variant: 'blue',
    },
};

export const GreenBadge: Story = {
    args: {
        variant: 'green',
    },
};

export const PurpleBadge: Story = {
    args: {
        variant: 'purple',
    },
};

export const PinkBadge: Story = {
    args: {
        variant: 'pink',
    },
};

export const OrangeBadge: Story = {
    args: {
        variant: 'orange',
    },
};

export const BlackBadge: Story = {
    args: {
        variant: 'black',
    },
};

export const BadgeRoundedMd: Story = {
    args: {
        rounded: 'md',
    },
};

export const BadgeRoundedXl: Story = {
    args: {
        rounded: 'xl',
    },
};

export const BadgeSizeXs: Story = {
    args: {
        size: 'xs',
    },
};

export const BadgeSizeMd: Story = {
    args: {
        size: 'md',
    },
};

export const BadgeSizeLg: Story = {
    args: {
        size: 'lg',
    },
};
