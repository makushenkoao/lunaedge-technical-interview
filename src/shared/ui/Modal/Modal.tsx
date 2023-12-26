import { ReactNode, useEffect } from 'react';

import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';

import { XMarkIcon } from '@heroicons/react/24/outline';

interface ModalProps {
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    title?: string;
}

export const Modal = (props: ModalProps) => {
    const { children, isOpen, title, onClose } = props;

    const modalStyles = isOpen
        ? 'opacity-1 pointer-events-auto'
        : 'opacity-0 pointer-events-none';

    const close = () => {
        onClose?.();
    };

    const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            close();
        }
    };

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    return (
        <Portal element={document.getElementById('app') ?? document.body}>
            <div
                className={`fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center ${modalStyles}`}
            >
                <Overlay onClick={close} />
                <div className="bg-white shadow-lg p-6 rounded-lg w-1/4 z-50">
                    <div className="flex justify-between items-center mb-2">
                        {title && (
                            <h2 className="font-bold text-xl">{title}</h2>
                        )}
                        <XMarkIcon
                            className="w-8 h-8 cursor-pointer"
                            onClick={close}
                        />
                    </div>
                    {children}
                </div>
            </div>
        </Portal>
    );
};
