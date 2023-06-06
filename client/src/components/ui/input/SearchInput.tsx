import { FC, InputHTMLAttributes } from 'react';
import { BsSearch } from 'react-icons/bs';
import { cn } from '~utils/utils';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> { }

const SearchInput: FC<InputProps> = ({ className, ...props }) => {
  return (
    <div
      className={cn(
        'flex items-center bg-[#F8F8F8] rounded-md h-[40px]  px-4',
        className,
      )}
    >
      <BsSearch className="text-[#BBBBBB]" />
      <input
        type="text"
        className="flex-1 text-sm ring-0 focus:ring-0 focus:border-none active:border-0 placeholder:text-[#BBBBBB] bg-transparent outline-none focus:outline-none border-none"
        name="search"
        placeholder="Rechercher"
        {...props}
      />
    </div>
  );
};

export default SearchInput;
