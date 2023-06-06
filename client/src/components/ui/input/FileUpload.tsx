import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import { XMarkIcon } from '@heroicons/react/24/solid';
import React, { ChangeEvent, useState } from 'react';
import { UseFormRegister } from 'react-hook-form';

  
import { BsFiletypeDocx, BsFileEarmarkPdfFill, BsFiletypePng, BsFiletypeXls } from "react-icons/bs";
import { AiOutlineFileJpg, AiFillFileExclamation } from "react-icons/ai";
import { cn } from '~utils/utils';
import Button from '../button/Button';
import InputError from './InputError';
import Label from './Label';

type Props = {
  label?: string;
  name: string;
  error?: string;
  register?: UseFormRegister<any>;
  files?: any[];
  max?: number;
  fileTypeMessage?: string;
  uploadHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  deleteHandler: (id: number) => void;
};

export default function FileUpload({
  label,
  name,
  uploadHandler,
  deleteHandler,
  register,
  error,
  fileTypeMessage = 'Le fichier doit être un XLS, DOC, PDF, JPEG, JPG ou PNG et peser moins de 5 Mo.',
  max = 3,
  files = [],
}: Props) {
  const registerOptions = register ? register(name) : {};
  const [downloadUrl, setDownloadUrl] = useState('');

  return (
    <div className="flex flex-col w-full gap-1">
      <div className="flex w-full justify-between items-center">
        <Label title={label} htmlFor={name} />
        <span className="text-xs">
          {files.length}/{max} fichiers
        </span>
      </div>
      <div className="flex w-full gap-4">
        <div
          className={cn(
            'w-full flex border-2 gap-4 border-gray-300 border-dashed rounded-md bg-gray-50 relative p-4',
          )}
        >
          {files.length < max && (
            <label
              htmlFor={name}
              className="cursor-pointer bg-transparent rounded-md font-medium text-gray-600 hover:bg-gray-200 hover:text-gray-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-gray-500 border border-gray-300 flex justify-center flex-col gap-2 h-40 w-40 items-center p-4 transition"
            >
              <input
                id={name}
                name={name}
                type="file"
                className="sr-only"
                onChange={uploadHandler}
                multiple
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
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>
              <span className="text-sm text-center">Ajouter</span>
            </label>
          )}
          <div className="overflow-x-scroll overflow-y-hidden flex-1">
            <div className="flex w-max gap-2">
              {files.map((file, index) => (
                <AttachmentPreview
                  key={index}
                  fileName={file.name}
                  fileSize={file.size}
                  fileType={file.type}
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

const getFileIcon = (fileType: string) => {
  let fileIcon = null;

  switch (fileType) {
    case 'application/vnd.ms-excel': {
      fileIcon = <BsFiletypeXls />;
      break;
    }
    case 'text/csv': {
      fileIcon = <BsFiletypeXls />;
      break;
    }
    case 'application/pdf': {
      fileIcon = <BsFileEarmarkPdfFill />;
      break;
    }
    case 'image/png': {
      fileIcon = <BsFiletypePng />;
      break;
    }
    case 'image/jpg': {
      fileIcon = <AiOutlineFileJpg />;
      break;
    }
    case 'image/jpeg': {
      fileIcon = <AiOutlineFileJpg />;
      break;
    }
    // case 'image/webp': {
    //   fileIcon = <WEBPIcon />;
    //   break;
    // }
    case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document': {
      fileIcon = <BsFiletypeDocx />;
      break;
    }
    case 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': {
      fileIcon = <BsFiletypeXls />;
      break;
    }
    default:
      fileIcon = <AiFillFileExclamation />;
  }
  return fileIcon;
};

const AttachmentPreview = ({
  fileName = 'titre_acquisition_2022_12_23.pdf',
  fileSize = 4.1,
  fileType = 'application/pdf',
  onRemove,
}: {
  fileName?: string;
  fileSize?: number;
  fileType?: string;
  onRemove?: (id: number) => void;
}) => {
  return (
    <div className="cursor-pointer rounded-md font-medium text-gray-600 hover:opacity-80 hover:text-gray-500 focus-within:outline-none focus-within:ring-0 focus-within:ring-offset-0 focus-within:ring-gray-500 border border-gray-300 flex justify-center flex-col gap-2 h-40 items-center p-4 transition relative group overflow-hidden bg-white">
      <div className="flex gap-2 flex-col justify-center items-center w-full">
        {getFileIcon(fileType)}
        <div className="flex flex-col justify-center items-center gap-1 text-sm">
          <p className="font-semibold text-xs truncate w-52 text-center">
            {fileName}
          </p>
          <span className="text-xs opacity-70">
            {fileSize >= 1_000_000
              ? `${(fileSize / 1_000_000).toFixed(2)} MB`
              : `${(fileSize / 1_024).toFixed(2)} KB`}
          </span>
        </div>
      </div>
      <div className="flex gap-2 absolute right-2 bottom-2 translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
        <Button
          title="Télécharger la pièce jointe"
          variant="secondary"
          className="bg-gray-700 text-white"
          type="button"
          onClick={() => {}}
        >
          <a
            href={URL.createObjectURL(new Blob([fileType]))}
            download={fileName}
          >
            <ArrowDownTrayIcon className="h-4 w-4 cursor-pointer text-white" />
          </a>
        </Button>
        <Button
          title="Supprimer la pièce jointe"
          variant="secondary"
          className="bg-gray-700 text-white"
          type="button"
          //@ts-ignore
          onClick={onRemove}
        >
          <XMarkIcon />
        </Button>
      </div>
    </div>
  );
};
