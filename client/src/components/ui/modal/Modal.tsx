import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import { FC, Fragment, ReactNode } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
  subTitle?: string;
}

const Modal: FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  subTitle,
  children,
}) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-[999]" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto z-100 ">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="max-h-[calc(100vh-50px)] w-[50%] overflow-y-scroll transform overflow-hidden rounded-2xl bg-white p-6 shadow-xl transition-all">
                {title && (
                  <Dialog.Title
                    as="h3"
                    className="text-gray-900 flex justify-between"
                  >
                    <div className=" flex flex-col">
                      <span className="text-lg mb-2 font-medium leading-6">
                        {title}
                      </span>
                      <span className="font-small text-xs text-gray-500">
                        {subTitle}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={onClose}
                      className="border px-2 py-1 rounded-lg"
                    >
                      <XIcon className="h-4" />
                    </button>
                  </Dialog.Title>
                )}
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
