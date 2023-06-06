import { DocumentIcon } from '@heroicons/react/outline';
import React, { ChangeEvent } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { cn } from '~utils/utils';
import { ImagePreview } from './ImagePreview';
import InputError from './InputError';
import Label from './Label';

type Props = {
  label?: string;
  name: string;
  error?: string;
  className?: string;
  register?: UseFormRegister<any>;
  images?: any[];
  multiple?: boolean;
  max?: number;
  fileTypeMessage?: string;
  uploadHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  deleteHandler: (id: number) => void;
};

export default function ImagesUpload({
  label,
  name,
  className = '',
  register,
  error,
  fileTypeMessage = 'Les images doit être un JPEG, JPG ou PNG et peser moins de 5 Mo.',
  uploadHandler,
  deleteHandler,
  max = 20,
  images = [],
}: Props) {
  const registerOptions = register ? register(name) : {};
  return (
    <div className="flex flex-col w-full gap-1">
      <div className="flex w-full justify-between items-center">
        <Label title={label} htmlFor={name} />
        <span className="text-xs">
          {images.length}/{max} images
        </span>
      </div>
      <div className="flex w-full gap-4">
        <div
          className={cn(
            'w-full flex border-2 gap-4 border-gray-300 border-dashed rounded-md bg-gray-50 relative p-4',
          )}
        >
          {images.length < max && (
            <label
              htmlFor="file-upload"
              className="cursor-pointer bg-transparent rounded-md font-medium text-gray-600 hover:bg-gray-200 hover:text-gray-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-gray-500 border border-gray-300 flex justify-center flex-col gap-2 h-40 w-40 items-center p-4 transition"
            >
              <input
                id="file-upload"
                name="file-upload"
                type="file"
                className="sr-only"
                onChange={uploadHandler}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-sm">Ajouter</span>
            </label>
          )}
          <div className="overflow-x-scroll overflow-y-hidden flex-1">
            <div className="flex w-max gap-2">
              {images.map((image, index) => (
                <ImagePreview
                  key={index}
                  imageUrl={image}
                  onRemove={() => deleteHandler(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <span className="text-xs text-gray-500">{fileTypeMessage}</span>
      <InputError message={error} />
    </div>
  );
}
