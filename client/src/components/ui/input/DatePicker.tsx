import React, { useState } from 'react';
// import ReactDatePicker from 'react-datepicker';

// import 'react-datepicker/dist/react-datepicker.css';
import InputError from './InputError';
import Label from './Label';

type Props = {
  label: string;
  className?: string;
  onChange: (date: Date) => void;
  error: string;
  isRequired?: boolean;
};

export default function DatePicker({
  label,
  className = '',
  onChange,
  error = '',
  isRequired = false,
}: Props) {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="relative">
      <span>
        <Label title={label} />
        {isRequired && <span className="text-red-500 ml-1">*</span>}
      </span>
      {/* 
            <ReactDatePicker
                selected={startDate}
                className="block h-[50px] py-2 rounded-full border-gray-400"
                onChange={(date: Date) => setStartDate(date)}
                dateFormat="d-MMM-yyyy"
            /> */}
      <InputError message={error} />
    </div>
  );
}
