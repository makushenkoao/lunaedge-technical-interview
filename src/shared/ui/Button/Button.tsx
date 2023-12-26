import { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'outline' | 'primary' | 'text';
type ButtonSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: ButtonVariant;
    size?: ButtonSize;
    disabled?: boolean;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
}

const getVariantClasses = (variant: ButtonVariant): string => {
    switch (variant) {
        case 'outline':
            return 'border border-dark-purple text-dark-purple hover:bg-light-purple active:opacity-80 focus:border-2';
        case 'text':
            return 'focus:border-2 focus:border-dark-purple focus:text-dark-purple hover:bg-light-purple hover:text-purple active:opacity-80';
        default:
            return 'bg-dark-purple text-white hover:bg-purple active:opacity-80 focus:bg-purple focus:border-2 focus:border-dark-purple';
    }
};

const getSizeClasses = (size: ButtonSize): string => {
    switch (size) {
        case 'xs':
            return 'h-5 px-1 text-xs';
        case 'sm':
            return 'h-6 px-1.5 text-sm';
        case 'lg':
            return 'h-10 px-3 text-lg';
        case 'xl':
            return 'h-12 px-4 text-xl';
        default:
            return 'h-8 px-2 text-base';
    }
};

export const Button = (props: ButtonProps) => {
    const {
        children,
        variant = 'primary',
        disabled,
        size = 'base',
        startIcon,
        endIcon,
        ...rest
    } = props;

    const variantClasses = getVariantClasses(variant);
    const sizeClasses = getSizeClasses(size);

    return (
        <button
            type="button"
            disabled={disabled}
            className={`rounded border-solid flex gap-2 items-center disabled:opacity-40 ${variantClasses} ${sizeClasses}`}
            {...rest}
        >
            <div className="w-4 h-4">{startIcon}</div>
            {children}
            <div className="w-4 h-4">{endIcon}</div>
        </button>
    );
};
