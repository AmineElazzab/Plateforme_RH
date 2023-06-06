import { PlusIcon, TrashIcon } from '@heroicons/react/outline';
import type { FC } from 'react';
import ReactSelect, { Props } from 'react-select';
import Button from '../button/Button';
import InputError from './InputError';
import Label from './Label';

interface SelectProps extends Props {
  label?: string;
  error?: string;
  ref?: any;
  onAdd?: null | (() => void);
  onDelete?: null | (() => void);
}

const Select: FC<SelectProps> = ({
  defaultValue,
  options,
  onChange,
  isDisabled = false,
  label,
  error,
  onAdd = null,
  onDelete = null,
  ref,
  ...rest
}) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <Label title={label} />
      <div className="flex gap-2 w-full">
        <ReactSelect
          className="w-full"
          ref={ref}
          isDisabled={isDisabled}
          defaultValue={defaultValue}
          styles={{
            indicatorSeparator: () => ({
              display: 'none',
            }),
            menu: (provided) => ({
              ...provided,
            }),
            input: (base) => ({
              ...base,
              'input:focus': {
                boxShadow: 'none',
              },
            }),
            control: (base, { isFocused }) => ({
              ...base,
              textTransform: '',
              borderColor: isFocused
                ? error
                  ? 'rgb(220 38 38)'
                  : '#06d6a0'
                : error
                ? 'rgb(220 38 38)'
                : '#d1d5db',
              backgroundColor:
                error || (error && isFocused)
                  ? 'rgb(254 226 226 / 0.7)'
                  : (isFocused && !error) || isFocused
                  ? 'rgb(243 244 246 / 0.7)'
                  : 'inherit',
              // backgroundColor: isFocused
              //   ? error
              //     ? // red
              //       'rgb(254 226 226 / 0.7)'
              //     : // gray
              //       'rgb(243 244 246 / 0.7)'
              //   : 'white',
              borderWidth: '1px',
              borderRadius: '6px',
              color: '#FFF',
              ':hover': {
                borderColor: error ? 'rgb(220 38 38)' : '#06d6a0',
              },
              boxShadow: 'none',
            }),
            option: (provided, { isFocused, isSelected }) => ({
              ...provided,
              cursor: 'pointer',
              borderRadius: 5,
              padding: '10px',
              fontSize: '14px',
              textTransform: 'capitalize',
              backgroundColor: isSelected
                ? '#06d6a0'
                : isFocused
                ? '#F3F4F6'
                : 'inherit',
              color: isSelected ? '#fff' : '#000',
              fontWeight: '500',
            }),
            placeholder: (provided) => ({
              ...provided,
              fontSize: '14px',
            }),
            singleValue: (provided) => ({
              ...provided,
              fontSize: '14px',
            }),
          }}
          options={options}
          onChange={onChange}
          {...rest}
        />
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
};

export default Select;
