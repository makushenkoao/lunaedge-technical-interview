import { forwardRef, InputHTMLAttributes, useState } from 'react';
import {
    InformationCircleIcon,
    EyeIcon,
    EyeSlashIcon,
} from '@heroicons/react/24/solid';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    icon?: React.ComponentType<{ className?: string }>;
    isError?: boolean;
    validationInformation?: string;
    showPasswordIcon?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const {
        label,
        isError,
        icon: Icon,
        validationInformation,
        showPasswordIcon,
        type,
        ...rest
    } = props;
    const [isVisible, setIsVisible] = useState(false);

    const onChangeVisible = () => {
        setIsVisible((prevState) => !prevState);
    };

    const errorInputStyles = isError ? 'border-red-400' : '';
    const iconInputStyles = Icon ? 'pl-12' : 'pl-4';
    const passwordIconInputStyles = showPasswordIcon ? 'pr-12' : 'pr-4';
    const iconErrorStyles = isError ? 'text-red-400' : '';
    const iconStyles = 'absolute top-2.5 w-5 h-5';
    const errorValidationStylesStyles = isError
        ? 'text-red-400'
        : 'text-slate-600"';

    const inputType =
        type === 'password' ? (isVisible ? 'email' : 'password') : type;

    return (
        <div className="flex flex-col gap-2">
            {label && (
                <div className="flex gap-1 items-center">
                    <p>{label}</p>
                    <InformationCircleIcon className="w-5 h-5" />
                </div>
            )}
            <div className="relative w-100">
                <input
                    ref={ref}
                    type={inputType}
                    className={`outline-none bg-transparent relative w-100 h-10 rounded-lg border border-solid border-gray-500 py-3 hover:border-dark-purple focus:border-dark-purple ${iconInputStyles} ${passwordIconInputStyles} ${errorInputStyles}`}
                    {...rest}
                />
                {Icon && (
                    <Icon
                        className={`left-4 ${iconStyles} ${iconErrorStyles}`}
                    />
                )}
                {showPasswordIcon && (
                    <>
                        {isVisible ? (
                            <EyeIcon
                                onClick={onChangeVisible}
                                className={`${iconStyles} right-4 cursor-pointer`}
                            />
                        ) : (
                            <EyeSlashIcon
                                onClick={onChangeVisible}
                                className={`${iconStyles} right-4 cursor-pointer`}
                            />
                        )}
                    </>
                )}
            </div>
            {validationInformation && (
                <p className={errorValidationStylesStyles}>
                    {validationInformation}
                </p>
            )}
        </div>
    );
});
