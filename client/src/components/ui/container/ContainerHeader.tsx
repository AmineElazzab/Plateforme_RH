import React, { ReactElement } from 'react';
import Button from '../button/Button';

type Props = {
  title: string;
  onRight?: () => ReactElement;
};

export default function ContainerHeader({
  title = 'TITLE',
  onRight = () => <></>,
}: Props) {
  return (
    <div className="flex items-center justify-between py-3 border-b-2 border-gray-100 mb-4">
      <h1 className="text-xl font-semibold">{title}</h1>
      <div>{onRight()}</div>
    </div>
  );
}
