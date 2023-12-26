import { XMarkIcon, BellIcon } from '@heroicons/react/24/outline';

type BadgeVariant =
    | 'gray'
    | 'red'
    | 'yellow'
    | 'blue'
    | 'green'
    | 'purple'
    | 'pink'
    | 'black'
    | 'orange';

type BadgeRounded = 'md' | 'xl';

type BadgeSize = 'xs' | 'md' | 'lg';

type BadgeType = 'notification' | 'base' | 'delete';

interface BadgeProps {
    title: string;
    type?: BadgeType;
    variant?: BadgeVariant;
    size?: BadgeSize;
    rounded?: BadgeRounded;
    onDelete?: () => void;
}

const getRoundedStyles = (rounded: BadgeRounded): string => {
    switch (rounded) {
        case 'md':
            return 'rounded-md';
        case 'xl':
            return 'rounded-xl';
    }
};
const getSizeStyles = (size: BadgeSize, type: BadgeType) => {
    const isBaseBadge = type === 'base';
    const isNotificationBadge = type === 'notification';

    switch (size) {
        case 'xs':
            return isBaseBadge
                ? 'px-2'
                : isNotificationBadge
                  ? 'pr-2 pl-5'
                  : 'pl-2 pr-5';
        case 'md':
            return isBaseBadge
                ? 'px-2.5'
                : isNotificationBadge
                  ? 'pr-2.5 pl-7'
                  : 'pl-2.5 pr-7';
        case 'lg':
            return isBaseBadge
                ? 'px-5'
                : isNotificationBadge
                  ? 'pr-4 pl-8'
                  : 'pl-4 pr-8';
    }
};

const getVariantStyles = (variant: BadgeVariant) => {
    switch (variant) {
        case 'black':
            return 'bg-black text-white';
        case 'blue':
            return 'bg-blue-200 text-blue-700';
        case 'orange':
            return 'bg-orange-200 text-orange-700';
        case 'purple':
            return 'bg-dark-purple text-light-purple';
        case 'gray':
            return 'bg-gray-200 text-black';
        case 'green':
            return 'bg-green-200 text-green-700';
        case 'yellow':
            return 'bg-yellow-200 text-yellow-700';
        case 'pink':
            return 'bg-pink-200 text-pink-700';
        case 'red':
            return 'bg-red-200 text-red-700';
    }
};
const renderIcon = (
    type: BadgeType,
    size: BadgeSize,
    onDelete?: () => void,
) => {
    const rightPositionStyle = size === 'xs' ? 'right-0.5' : 'right-2';
    const leftPositionStyle = size === 'xs' ? 'left-0.5' : 'left-2';

    switch (type) {
        case 'base':
            return;
        case 'delete':
            return (
                <XMarkIcon
                    className={`w-4 h-4 absolute top-1/2 -translate-y-1/2 cursor-pointer ${rightPositionStyle}`}
                    onClick={() => onDelete?.()}
                />
            );
        case 'notification':
            return (
                <BellIcon
                    className={`w-4 h-4 absolute top-1/2 -translate-y-1/2 ${leftPositionStyle}`}
                />
            );
    }
};

export const Badge = (props: BadgeProps) => {
    const {
        title,
        type = 'base',
        rounded = 'xl',
        variant = 'black',
        size = 'xs',
        onDelete,
    } = props;

    const roundedStyles = getRoundedStyles(rounded);
    const sizeStyles = getSizeStyles(size, type);
    const variantStyles = getVariantStyles(variant);

    const handleBadgeClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    return (
        <div
            className={`rounded-2xl inline-block relative ${roundedStyles} ${sizeStyles} ${variantStyles} h-5`}
            onClick={handleBadgeClick}
        >
            <p className="text-sm">{title}</p>
            {renderIcon(type, size, onDelete)}
        </div>
    );
};
