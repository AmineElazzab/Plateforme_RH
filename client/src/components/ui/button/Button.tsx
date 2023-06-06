import React from 'react';
import { cn } from '~utils/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary' | 'tertiary';
  children?: React.ReactNode;
}

// Text only button
const Button = ({
  children,
  variant,
  className = '',
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        {
          'bg-sky-600 hover:bg-blue-500/90 hover:text-slate-50 text-slate-100':
            variant === 'primary',
          ' bg-slate-300 text-slate-500 hover:bg-slate-100 hover:text-white  border':
            variant === 'secondary',
          'bg-transparent hover:bg-sam-blue-200/70 text-sam-blue-500':
            variant === 'tertiary',
        },
        'relative group p-2 transition duration-300 active:scale-95 rounded-md font-medium min-h-[38px] min-w-[38px] flex justify-center items-center disabled:opacity-60',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
