import { forwardRef, useEffect, useRef, useState } from 'react';
import {
    InformationCircleIcon,
    ChevronDownIcon,
    ChevronUpIcon,
    XMarkIcon,
} from '@heroicons/react/24/solid';
import { Badge } from '@/shared/ui/Badge';

export interface Option {
    label: string;
    value?: string;
}

type SelectProps = {
    label?: string;
    isError?: boolean;
    validationInformation?: string;
    showArrowIcon?: boolean;
    options: Option[];
    defaultValue?: string;
} & (
    | {
          multiple: true;
          value?: Option[];
          onChange?: (selectedOptions: Option[]) => void;
      }
    | {
          multiple: false;
          value?: Option;
          onChange?: (selectedOptions: Option) => void;
      }
);

export const Select = forwardRef<HTMLDivElement, SelectProps>((props, ref) => {
    const {
        label,
        showArrowIcon,
        validationInformation,
        isError,
        options,
        value,
        onChange,
        defaultValue,
        multiple,
    } = props;

    const [isOpen, setIsOpen] = useState(false);

    const selectedOptions = multiple
        ? value || []
        : [value || { value: undefined, label: '' }];

    const [inputText, setInputText] = useState('');
    const [filteredOptions, setFilteredOptions] = useState<Option[]>(options);

    const wrapperRef = useRef<HTMLDivElement>(null);

    const handleChangeIsOpen = () => {
        setIsOpen((prevState) => !prevState);
        setInputText('');
    };

    const errorInputStyles = isError ? 'border-red-400' : '';
    const errorValidationStylesStyles = isError
        ? 'text-red-400'
        : 'text-slate-600';

    const handleOptionClick = (option: Option) => {
        const isOptionSelected = selectedOptions.some(
            (selectedOption) => selectedOption.value === option.value,
        );

        if (multiple) {
            if (!isOptionSelected) {
                onChange?.([...selectedOptions, option]);
                setInputText('');
            }
        } else {
            onChange?.(option);
            setIsOpen(false);
        }
    };

    const handleBadgeDelete = (index: number) => {
        if (multiple) {
            const newOptions = selectedOptions.filter((_, i) => i !== index);
            onChange?.(newOptions);
        } else {
            onChange?.({ label: '', value: undefined });
        }
    };

    const clearSelectedOptions = () => {
        if (multiple) {
            onChange?.([]);
        } else {
            onChange?.({ label: '', value: '' });
        }

        setInputText('');
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key.toLowerCase() === 'escape') {
                setIsOpen(false);
            } else if (e.key.toLowerCase() === 'backspace') {
                setInputText((prev) => prev.slice(0, -1));
            } else if (e.key.match(/[a-zA-Z0-9\s]/)) {
                setInputText((prev) => prev + e.key);
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    useEffect(() => {
        setFilteredOptions(
            options.filter(
                (option) =>
                    !selectedOptions.some(
                        (selectedOption) =>
                            selectedOption.value === option.value,
                    ) &&
                    option.label
                        .toLowerCase()
                        .includes(inputText.toLowerCase()),
            ),
        );
    }, [inputText, options, selectedOptions.length]);

    const handleClickOutside = (event: MouseEvent) => {
        if (
            wrapperRef.current &&
            !wrapperRef.current.contains(event.target as Node)
        ) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div
            className="flex flex-col gap-2"
            ref={wrapperRef}
        >
            {label && (
                <div className="flex gap-1 items-center">
                    <p>{label}</p>
                    <InformationCircleIcon className="w-5 h-5" />
                </div>
            )}
            <div className="relative w-100">
                <div
                    ref={ref}
                    onClick={handleChangeIsOpen}
                    tabIndex={0}
                    className={`w-100 h-8 flex outline-none px-4 rounded border border-solid border-gray-500 hover:border-dark-purple focus:border-dark-purple ${errorInputStyles} cursor-pointer`}
                >
                    <ul className="flex gap-1 items-center w-80 overflow-x-auto">
                        {selectedOptions.length === 0 ||
                        (!multiple &&
                            !selectedOptions[0].label &&
                            !selectedOptions[0].value) ? (
                            <p className="text-slate-400">
                                {defaultValue || 'Select'}
                            </p>
                        ) : (
                            selectedOptions.map((option, index) => (
                                <li
                                    key={index}
                                    className="flex items-center"
                                >
                                    <Badge
                                        title={option.label}
                                        variant="gray"
                                        type="delete"
                                        onDelete={() =>
                                            handleBadgeDelete(index)
                                        }
                                    />
                                </li>
                            ))
                        )}
                    </ul>
                </div>
                {isOpen && (
                    <div className="w-100 bg-slate-50 roundedz z-50 absolute top-8 right-0 rounded max-h-44 overflow-y-auto">
                        <ul className="flex flex-col justify-center">
                            {filteredOptions.map((option, index) => (
                                <li
                                    key={index}
                                    className="hover:bg-light-purple rounded p-2 cursor-pointer"
                                    onClick={() => handleOptionClick(option)}
                                >
                                    {option.label}
                                </li>
                            ))}
                            {filteredOptions.length === 0 && (
                                <li className="rounded p-2">
                                    There are no more results
                                </li>
                            )}
                        </ul>
                    </div>
                )}
                <XMarkIcon
                    className={`w-4 h-4 absolute top-1/2 -translate-y-1/2 cursor-pointer ${
                        showArrowIcon ? 'right-7' : 'right-2'
                    }`}
                    onClick={clearSelectedOptions}
                />
                {showArrowIcon && (
                    <>
                        {isOpen ? (
                            <ChevronUpIcon
                                className="w-4 h-4 absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer"
                                onClick={handleChangeIsOpen}
                            />
                        ) : (
                            <ChevronDownIcon
                                className="w-4 h-4 absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer"
                                onClick={handleChangeIsOpen}
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
