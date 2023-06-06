import { FC } from 'react';

const ErrorMessage: FC<{ message: string | null }> = ({ message }) => {
  if (!message) return <></>;
  return (
    <div className="bg-red-100 text-base text-center p-3 rounded-md text-red-500 font-semibold ">
      {message}
    </div>
  );
};

export default ErrorMessage;
