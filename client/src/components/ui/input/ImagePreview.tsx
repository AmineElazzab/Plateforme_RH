import { PhotographIcon } from '@heroicons/react/outline';
import { XIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import React from 'react';
import Button from '../button/Button';

export const ImagePreview = ({
  imageUrl,
  onRemove,
}: {
  imageUrl?: string;
  onRemove?: () => void;
}) => {
  return (
    <div className="cursor-pointer bg-transparent rounded-md font-medium text-gray-600 hover:bg-gray-200 hover:text-gray-500 focus-within:outline-none focus-within:ring-0 focus-within:ring-offset-2 focus-within:ring-gray-500 border border-gray-300 flex justify-center flex-col gap-2 h-40 w-40 items-center p-4 transition relative group overflow-hidden">
      {typeof imageUrl === 'string' ? (
        // <div
        //   className="absolute inset-0 group-hover:opacity-80 transition"
        //   style={{
        //     backgroundImage: `url(${imageUrl})`,
        //     backgroundPosition: 'center',
        //     backgroundSize: 'cover',
        //     backgroundRepeat: 'no-repeat',
        //   }}
        // />
        <Image
          src={imageUrl}
          alt={'uploadedImg'}
          fill
          className="object-cover"
          onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src = '/assets/images/no_preview.webp';
          }}
        />
      ) : (
        <PhotographIcon className={'text-gray-400 w-24 py-8'} />
      )}

      {onRemove && (
        <Button
          title="Remove attachment"
          variant="secondary"
          className="bg-gray-700 text-white absolute right-2 bottom-2 translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
          type="button"
          onClick={onRemove}
        >
          <XIcon />
        </Button>
      )}
    </div>
  );
};
