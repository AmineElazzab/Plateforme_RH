import React from 'react';

type Props = {};

export default function Divider({}: Props) {
  return (
    <div className="w-full hidden sm:block" aria-hidden="true">
      <div className="py-3">
        <div className="border-t border-gray-200" />
      </div>
    </div>
  );
}
