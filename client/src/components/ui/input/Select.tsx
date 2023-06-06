import { PlusIcon, TrashIcon } from '@heroicons/react/outline';
import React, { SelectHTMLAttributes } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { cn } from '~utils/utils';
import Button from '../button/Button';
import InputError from './InputError';
import Label from './Label';

type Option = {
  label: string;
  value: string | number;
};
interface Props extends SelectHTMLAttributes<HTMLElement> {
  label?: string;
  name: string;
  error?: string;
  register?: UseFormRegister<any>;
  options: Option[];
  onAdd?: null | (() => void);
  onDelete?: null | (() => void);
}

export default function Select({
  label,
  name,
  className = '',
  register,
  error,
  options,
  placeholder = 'placeholder',
  onAdd = null,
  onDelete = null,
  defaultValue = '',
  ...rest
}: Props) {
  const registerOptions = register ? register(name) : {};
  return (
    <div className="flex flex-col gap-1 w-full">
      <Label title={label} htmlFor={name} />
      <div className="flex gap-2 w-full">
        <select
          className={cn(
            'flex-1 block w-full rounded-md sm:text-sm border-gray-300 transition focus:ring-0',
            {
              'border-red-600 focus:border-red-600 focus:ring-red-500 focus:bg-red-100/70':
                !!error,
            },
            {
              ' focus:ring-sam-green-500 focus:border-sam-green-500 focus:bg-gray-100/70':
                !error,
            },
            className,
          )}
          id={name}
          {...rest}
          {...registerOptions}
          defaultValue={defaultValue}
        >
          <option disabled value="">
            {placeholder}
          </option>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {onAdd !== null && (
          <Button
            type="button"
            onClick={onAdd}
            className="h-max"
            variant="secondary"
          >
            <PlusIcon />
          </Button>
        )}
        {onDelete !== null && (
          <Button
            type="button"
            onClick={onDelete}
            className="h-max text-red-400 border-red-400 hover:bg-red-50"
            variant="secondary"
          >
            <TrashIcon />
          </Button>
        )}
      </div>
      <InputError message={error} />
    </div>
  );
}
