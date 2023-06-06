import { ChevronRightIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import React, { Fragment, ReactNode } from 'react';

type BreadCrumb = {
  href: string;
  title: string;
};

type Props = {
  title: string;
  breadcrumbs?: BreadCrumb[];
  navRight?: () => ReactNode;
};

export default function NavBar({
  title = 'Title',
  breadcrumbs = [],
  navRight,
}: Props) {
  return (
    <div className="flex items-center justify-between bg-white w-full h-[50px] py-2 px-4 md:px-7">
      <div className="flex items-center">
        <h1
          className="text-lg font-medium mr-4 truncate max-w-[256px]"
          title={title}
        >
          {title}
        </h1>
        {breadcrumbs.length > 0 && (
          <>
            <span className="opacity-30 mr-4 ">|</span>
            <div className="flex gap-2 items-center">
              {breadcrumbs.map((crumb, index) => (
                <Fragment key={index}>
                  <BreadCrumb href={crumb.href} title={crumb.title} />
                  {index < breadcrumbs.length - 1 && (
                    <div className="h-4 w-4">
                      <ChevronRightIcon />
                    </div>
                  )}
                </Fragment>
              ))}
            </div>
          </>
        )}
      </div>
      {navRight?.()}
    </div>
  );
}

function BreadCrumb({ href = '/', title = 'Crumb' }: BreadCrumb) {
  return (
    <div>
      {href ? (
        <Link
          title={title}
          className="text-sam-green-600 hover:text-sam-green-700 transition"
          href={href}
        >
          {title}
        </Link>
      ) : (
        <span className="text-gray-600">{title}</span>
      )}
    </div>
  );
}
