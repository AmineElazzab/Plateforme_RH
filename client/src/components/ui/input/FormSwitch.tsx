import { Switch } from '@headlessui/react';
import { ReactElement } from 'react';
import { cn } from '~utils/utils';

type Props = {
  onChange: () => void;
  label: string;
  description: string;
  isToggled?: boolean;
  disabled?: boolean;
  icon?: () => ReactElement;
  spacebetween ?: boolean;
};

export default function FormSwitch({
  onChange,
  label,
  description,
  isToggled = false,
  disabled = false,
  spacebetween,
  icon,
}: Props) {
  return (
    <Switch.Group as="div" className={`flex gap-4 items-center justify-between ${spacebetween ? "w-full" : ""} ${disabled && spacebetween ? "opacity-40 cursor-no-drop" : ""}`}>
      {icon && icon()}
      <span className="flex-grow flex flex-col">
        <Switch.Label
          as="span"
          className="text-sm font-medium text-gray-900"
          passive
        >
          {label}
        </Switch.Label>
        <Switch.Description as="span" className="text-sm text-gray-500">
          {description}
        </Switch.Description>
      </span>
      <Switch
        disabled={disabled}
        checked={isToggled}
        onChange={onChange}
        className={cn(
          isToggled ? 'bg-sam-green-600' : 'bg-gray-200',
          `relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full ${disabled && spacebetween ? "cursor-no-drop" : "cursor-pointer"} transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sam-green-500`,
          disabled ? 'opacity-40' : '',
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            isToggled ? 'translate-x-5' : 'translate-x-0',
            'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200',
          )}
        />
      </Switch>
    </Switch.Group>
  );
}
