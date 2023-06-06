/* This Sidebar requires Tailwind CSS v2.0+ */
import { Dialog, Disclosure, Transition } from '@headlessui/react';
import { XMarkIcon, PlusSmallIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Fragment } from 'react';
import { PERMISSIONS } from '~lib/static-data/permissions';
import { Button } from '~components/ui';

import { MAIN_NAVIGATIONS, SINGLE_NAVIGATIONS, UTILITY_NAVIGATIONS } from '~lib/static-data/navigation';

// @ts-ignore

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
  return (
    <>
      {/* <GlobalLoader /> */}
      {/* Static sidebar for mobile */}
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 flex z-[70] md:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex-1 flex flex-col max-w-xs w-full bg-blue-500">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    type="button"
                    className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none   focus:ring-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">
                      Fermer la barre de navigation
                    </span>
                    <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </Transition.Child>
              <div className="flex flex-col flex-grow border-r border-gray-200 pt-5 pb-4 bg-slate-500 overflow-y-auto">
                <div className="flex items-center flex-shrink-0 px-4">
                  <img src='assets/logos/harmony-logo.svg' alt='icoon'/>
                </div>
                <div className="mt-10 flex-grow flex flex-col">
                  <NavList navigation={SINGLE_NAVIGATIONS} />
                  <div className="mx-4 my-4 opacity-20" />
                  <NavList navigation={MAIN_NAVIGATIONS} />
                  <div className="mx-4 my-4 opacity-20" />
                  <NavList navigation={UTILITY_NAVIGATIONS} />
                </div>
              </div>
            </div>
          </Transition.Child>
          <div className="flex-shrink-0 w-14">
            {/* Force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
        {/* Sidebar component */}
        <div
          className="flex flex-col flex-grow border-r border-gray-200 pb-4 bg-slate-50 overflow-y-auto"
          style={{ scrollbarWidth: 'none' }}
        >
        
          <Link
            href="/"
            className="sticky z-[1000] flex items-center justify-center flex-shrink-0 max-h-[128px]  min-h-[65px] top-0 pt-1 pb-2 px-2 md:px-7 bg-slate-50 border-b-2 border-gray-200"
          >
            <img
              className="h-10 w-auto"
              src="/assets/logos/logo-left.svg"
              alt="Harmony"
            />
          </Link>

          <span className=" mb-2.5" />

          <div className="flex-grow flex flex-col">
            <div className='mx-2 my-0.5'>

              <Button variant='primary' className='w-full'><PlusSmallIcon className='w-6 h-6'/> Nouveau Projet</Button>
            </div>

            <NavList navigation={SINGLE_NAVIGATIONS} />
            <hr className="mx-4 my-2" />
            <NavList navigation={MAIN_NAVIGATIONS} />
            <hr className="mx-4 my-2" />
            <NavList navigation={UTILITY_NAVIGATIONS} />
          </div>
          <div className="bg-slate-50 flex p-2 justify-center items-center text-gray-600">
            <span>v 1.0.0.1</span>
          </div>
        </div>
      </div>
    </>
  );
}

const NavList = ({ navigation }: any) => {
  const router = useRouter();
  const route = router.pathname.split('/').slice(1);
  console.log({route});
  return (
    <nav className="mx-3 space-y-0 bg-slate-50" aria-label="Sidebar">
      {/* @ts-ignore */}
      {navigation.map((item) => {
        if (item.show in PERMISSIONS && !PERMISSIONS[item.show]) return null;

        return !item.children ? (
          <Link
            href={`/${item.href}`}
            key={item.name}
            className={classNames(
              item.href === route[0] ||
                (item.href.includes('tasks') &&
                  route[0].includes('tasks'))
                ? 'bg-blue-700/80 text-green-500'
                : 'text-gray-600 hover:bg-gray-300 duration-300 transition hover:text-white',
              'relatuve group w-full flex items-center px-3 py-5 text-sm font-normal tracking-wider rounded-lg relative',
            )}
          >
            <>
              {(item.href === route[0] ||
                (item.href.includes('tasks') &&
                  route[0].includes('tasks'))) && (
                <div className="w-[4px] bg-green-500 absolute left-0 top-0 bottom-0" />
              )}
              <item.icon
                className={
                  'mr-3 flex-shrink-0 h-6 w-6 font-medium group-hover:text-slate-800'
                }
                aria-hidden="true"
              />
              <span className="group-hover:translate-x-2 font-medium transition duration-300 group-hover:text-slate-800">
                {item.name}
              </span>
            </>
          </Link>
        ) : (
          <Disclosure
            defaultOpen={item.href === route[0]}
            as="div"
            key={item.name}
            className={classNames(
              item.href === route[0] ? 'bg-blue-700/80' : 'bg-blue-500',
              'space-y-1 relative',
            )}
          >
            {({ open }) => (
              <>
                <Disclosure.Button
                  className={classNames(
                    item.href === route[0]
                      ? 'bg-blue-700/80 text-green-500'
                      : 'bg-blue-500 text-white/70 hover:bg-blue-600 duration-300 transition hover:text-white',
                    'group w-full flex items-center px-3 pr-3 py-5 text-left text-sm font-normal tracking-wider rounded-sm focus:outline-none  ',
                  )}
                >
                  <item.icon
                    className={
                      'mr-3 flex-shrink-0 h-6 w-6 group-hover:text-green-500'
                    }
                    aria-hidden="true"
                  />
                  <span className="flex-1 group-hover:translate-x-2 transition duration-300 group-hover:text-green-500 ">
                    {item.name}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className={classNames(
                      open ? 'text-white/70 rotate-90' : 'text-gray-500',
                      'ml-3 flex-shrink-0 h-5 w-5 transform group-duration-300 transition hover:text-white/70 ease-in-out duration-150',
                    )}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </Disclosure.Button>
                <Disclosure.Panel className="space-y-1">
                  {/* @ts-ignore */}
                  {item.children.map((subItem: any) =>
                    subItem.show in PERMISSIONS &&
                    !PERMISSIONS[subItem.show] ? null : subItem.name ===
                        'Dossier' &&
                      !PERMISSIONS['GET_CONTRACTS'] &&
                      !PERMISSIONS['GET_DELIVERIES'] &&
                      !PERMISSIONS['GET_FOREIGN_CONTRACTS'] &&
                      !PERMISSIONS['GET_DONATIONS'] ? null : (
                      <Disclosure.Button
                        key={subItem.name}
                        className={classNames(
                          (item.href === route[0] &&
                            subItem.href === route[1]) ||
                            (item.href === route[0] &&
                              subItem.href.includes('dossier') &&
                              route[1].includes('dossier'))
                            ? 'text-green-500'
                            : 'text-white/70',
                          'relative group w-full flex items-center text-sm font-normal tracking-wider  rounded-sm duration-300 transition hover:bg-blue-600',
                        )}
                      >
                        {item.href === route[0] &&
                          subItem.href === route[1] && (
                            <div className="w-[4px] bg-green-500 absolute left-0 top-0 bottom-0" />
                          )}
                        {item.href === route[0] &&
                          subItem.href.includes('dossier') &&
                          route[1].includes('dossier') && (
                            <div className="w-[4px] bg-green-500 absolute left-0 top-0 bottom-0" />
                          )}
                        <Link
                          href={`/${item.href}/${subItem.href}`}
                          className="w-full block group-hover:translate-x-2 transition duration-300 group-hover:text-green-500 ml-11 mr-2 py-4 text-left"
                        >
                          {subItem.name}
                        </Link>
                      </Disclosure.Button>
                    ),
                  )}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        );
      })}
    </nav>
  );
};
