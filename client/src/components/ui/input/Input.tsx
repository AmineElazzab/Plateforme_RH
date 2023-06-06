import { TrashIcon } from '@heroicons/react/outline';
import { PlusIcon } from '@heroicons/react/solid';
import { FC, InputHTMLAttributes, ReactElement } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { cn } from '~utils/utils';
import Button from '../button/Button';
import InputError from './InputError';
import Label from './Label';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  flexDirection?: 'flex-row' | 'flex-col';
  labelClasses?: string;
  name: string;
  error?: string;
  register?: UseFormRegister<any>;
  leadingAddOn?: string | (() => ReactElement);
  trailingAddOn?: string | (() => ReactElement);
  dropDown?: () => ReactElement;
  onAdd?: null | (() => void);
  onDelete?: null | (() => void);
  setState?: React.Dispatch<React.SetStateAction<string>>;
}

const Input: FC<InputProps> = ({
  label,
  flexDirection = 'flex-col',
  labelClasses,
  name,
  className = '',
  register,
  error,
  type = 'text',
  placeholder = '',
  trailingAddOn,
  leadingAddOn,
  dropDown,
  onAdd = null,
  onDelete = null,
  setState,
  ...rest
}) => {
  const registerOptions = register ? register(name) : {};
  return (
    <div
      className={`flex ${flexDirection} ${
        flexDirection === 'flex-col' ? 'gap-1' : 'items-center gap-2'
      } w-full`}
    >
      <Label labelClasses={labelClasses} title={label} htmlFor={name} />
      <div className="flex gap-2 w-full">
        <div className="relative w-full">
          {leadingAddOn && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm" id="price-currency">
                {typeof leadingAddOn === 'string'
                  ? leadingAddOn
                  : leadingAddOn()}
              </span>
            </div>
          )}
          <input
            className={cn(
              'flex-1 block w-full rounded-md sm:text-sm border-gray-300 transition disabled:bg-gray-200 disabled:focus:ring-0 disabled:focus:border-transparent focus:ring-0 ',
              {
                'border-red-600 bg-red-100/70 focus:border-red-600 focus:ring-red-500 focus:bg-red-100/70':
                  !!error,
              },
              {
                'focus:ring-sam-green-500 focus:border-sam-green-500 focus:bg-gray-100/70':
                  !error,
              },
              {
                'pr-12': trailingAddOn,
              },
              {
                'pr-16': dropDown,
              },
              {
                'pl-7': leadingAddOn,
              },
              className,
            )}
            id={name}
            placeholder={placeholder ? placeholder : `Enter ${name}`}
            type={type}
            {...rest}
            {...registerOptions}
          />
          {dropDown ? (
            <div className="absolute inset-y-0 right-0 flex items-center">
              {dropDown?.()}
            </div>
          ) : (
            trailingAddOn && (
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <span className="text-gray-500 sm:text-sm" id="price-currency">
                  {typeof trailingAddOn === 'string'
                    ? trailingAddOn
                    : trailingAddOn()}
                </span>
              </div>
            )
          )}
        </div>
        {onAdd !== null && (
          <Button
            onClick={onAdd}
            className="h-max"
            variant="secondary"
            type="button"
          >
            <PlusIcon />
          </Button>
        )}
        {onDelete !== null && (
          <Button
            onClick={onDelete}
            className="h-max text-red-400 border-red-400 hover:bg-red-50 hover:text-red-600"
            variant="secondary"
            type="button"
          >
            <TrashIcon />
          </Button>
        )}
      </div>
      <InputError message={error} />
    </div>
  );
};

export default Input;
