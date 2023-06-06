import React, { TextareaHTMLAttributes } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { cn } from '~utils/utils';
import Label from './Label';

interface Props extends TextareaHTMLAttributes<HTMLElement> {
  label?: string;
  name: string;
  error?: string;
  register?: UseFormRegister<any>;
  classNameTextarea?: string
}

export default function TextArea({
  label,
  name,
  register,
  error,
  classNameTextarea,
  ...rest
}: Props) {
  const registerOptions = register ? register(name) : {};
  return (
    <div className={"flex flex-col w-full " }>
      <Label title={label} htmlFor={name} />
      <div className="mt-1 flex rounded-md -sm">
        <textarea
          cols={30}
          rows={5}
          placeholder="0"
          className={cn(
            'focus:ring-sam-green-500 focus:border-sam-green-500 flex-1 block w-full rounded-md sm:text-sm border-gray-300 focus:bg-gray-100/70 transition',
            {
              'border-red-600 focus:border-red-600': !!error,
            },
          ) + " " +  classNameTextarea}
          id={name}
          {...rest}
          {...registerOptions}
        />
      </div>
    </div>
  );
}
