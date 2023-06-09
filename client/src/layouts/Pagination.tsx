/** @format */

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from '@heroicons/react/solid';
import { DOTS, usePagination } from '../../lib/hooks/usePagination';
import { cn } from '../utils/utils';
import { Button } from '~components/ui';

type Props = {
  onPageChange: any;
  totalCount: number | undefined;
  siblingCount: number | undefined;
  currentPage: number | undefined;
  pageSize: number | undefined;
  className?: number;
};

const Pagination = (props: Props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage = 1,
    pageSize,
    className,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  // // console.log('PAGINATION PROPS:', props);

  // If there are less than 2 times in pagination range we shall not render the component
  // if (currentPage === 0 || (paginationRange?.length as number) < 2) {
  //     return null;
  // }

  let lastPage = paginationRange?.[paginationRange?.length - 1];

  const onNext = () => {
    onPageChange(currentPage + 1);
    // window.scrollTo(0, 0);
  };

  const onLastPage = () => {
    onPageChange(lastPage);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
    // window.scrollTo(0, 0);
  };

  const onFirstPage = () => {
    onPageChange(1);
  };

  return (
    <>
      <ul className={'flex gap-2'}>
        {/* Left navigation arrow */}
        <Button
          type="button"
          variant="tertiary"
          className={cn(
            currentPage <= 1 ? 'opacity-40' : 'opacity-100',
            'p-3 h-11 w-11 border-2 border-sam-blue-100 text-sam-blue-400 bg-none hover:bg-gray-100',
          )}
          onClick={onFirstPage}
          disabled={currentPage <= 1}
        >
          <ChevronDoubleLeftIcon />
        </Button>
        <Button
          type="button"
          variant="tertiary"
          className={cn(
            currentPage <= 1 ? 'opacity-40' : 'opacity-100',
            'p-3 h-11 w-11 border-2 border-sam-blue-100 text-sam-blue-400 bg-none hover:bg-gray-100',
          )}
          onClick={onPrevious}
          disabled={currentPage <= 1}
        >
          <ChevronLeftIcon />
        </Button>
        <div className="hidden md:flex gap-2">
          {paginationRange?.map((pageNumber, idx) => {
            // If the pageItem is a DOT, render the DOTS unicode character

            if (pageNumber === DOTS) {
              return (
                <span
                  key={idx}
                  className="flex items-center px-1 w-11 justify-center"
                >
                  &#8230;
                </span>
              );
            }

            // Render our Page Pills
            return (
              <Button
                key={idx}
                type="button"
                variant="tertiary"
                className={cn(
                  (pageNumber as number) === currentPage
                    ? 'border-sam-green-500 bg-sam-green-50 hover:bg-sam-green-50'
                    : ' bg-none hover:bg-gray-100 border-sam-blue-100',
                  'p-3 h-11 w-11 border-2  text-sam-blue-400',
                )}
                onClick={() => onPageChange(pageNumber as number)}
              >
                {pageNumber}
              </Button>
            );
          })}
        </div>
        {/*  Right Navigation arrow */}
        <Button
          variant="tertiary"
          type="button"
          className={cn(
            currentPage === (lastPage as number) ? 'opacity-40' : 'opacity-100',
            'p-3 h-11 w-11 border-2 border-sam-blue-100 text-sam-blue-400 bg-none hover:bg-gray-100',
          )}
          onClick={onNext}
          disabled={currentPage === (lastPage as number)}
        >
          <ChevronRightIcon />
        </Button>
        <Button
          variant="tertiary"
          type="button"
          className={cn(
            currentPage === (lastPage as number) ? 'opacity-40' : 'opacity-100',
            'p-3 h-11 w-11 border-2 border-sam-blue-100 text-sam-blue-400 bg-none hover:bg-gray-100',
          )}
          onClick={onLastPage}
          disabled={currentPage === (lastPage as number)}
        >
          <ChevronDoubleRightIcon />
        </Button>
      </ul>
    </>
  );
};

export default Pagination;
