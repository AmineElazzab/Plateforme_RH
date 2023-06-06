import { FC, InputHTMLAttributes } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { cn } from '~utils/utils';

interface ICheckBoxInput extends InputHTMLAttributes<HTMLInputElement> {
  key: string | number;
  data: { title: string; subTitle?: string; link?: string; checked: boolean };
  name: string;
  register?: UseFormRegister<any>;
}
const Checkbox: FC<ICheckBoxInput> = ({
  key,
  data,
  register,
  name,
  ...props
}: ICheckBoxInput) => {
  const capitalize = (str: string) =>
    `${str.at(0)?.toUpperCase()}${str.slice(1, str.length)}`;

  const registerOptions = register ? register(name) : {};

  return (
    <div
      key={key}
      className={cn(
        'flex py-1 px-4 rounded-md bg-white border-[1px] border-gray-200 shadow-sm items-center justify-between',
      )}
    >
      <div className={cn(`flex flex-col`)}>
        <div>{capitalize(data.title)}</div>
        {data.subTitle && (
          <div className="text-sm text-gray-700">{data?.subTitle}</div>
        )}
        {data.link && (
          <a href={data.link} className="text-sm text-green-700">
            {data?.link}
          </a>
        )}
      </div>
      <input
        type="checkbox"
        name=""
        id=""
        className="rounded-sm"
        {...props}
        {...registerOptions}
      />
    </div>
  );
};

export default Checkbox;

{
  /* <div className='flex items-center bg-[#F8F8F8] rounded-md h-[40px]  px-4'>
            <SearchIcon className='text-[#BBBBBB]' />
            <input
                type='text'
                className='flex-1 text-sm ring-0 focus:ring-0 focus:border-none active:border-0 placeholder:text-[#BBBBBB] bg-transparent outline-none focus:outline-none border-none'
                name='search'
                placeholder='Rechercher'
                {...props}
            />
        </div> */
}
