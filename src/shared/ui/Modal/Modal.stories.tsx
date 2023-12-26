import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from './Modal';
import { useState } from 'react';
import { Button } from '@/shared/ui/Button';

const meta: Meta<typeof Modal> = {
    title: 'shared/ui/Modal',
    component: Modal,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        title: 'Modal Title',
        isOpen: false,
        children:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci facere, laboriosam pariatur possimus similique sit vero? Aliquam aliquid, blanditiis cupiditate dolores, incidunt, ipsa minima molestiae nihil nobis non quidem soluta?',
    },
    decorators: [
        (Story) => {
            const [isOpen, setIsOpen] = useState(false);

            const onOpen = () => {
                setIsOpen(true);
            };

            const onClose = () => {
                setIsOpen(false);
            };

            return (
                <>
                    <Button onClick={onOpen}>Open Modal</Button>
                    <Story args={{ ...Primary.args, isOpen, onClose }} />
                </>
            );
        },
    ],
};
