import Link from 'next/link';
import React from 'react';
import Lottie from 'react-lottie';
import { Button } from '~components/ui';
import * as animationData from '../../../public/404.json';

type Props = {};

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

export default function NotFound({}: Props) {
  return (
    <>
      <Lottie options={defaultOptions} width={400} />
      <Button variant="primary">
        <Link href="/" className="inline-flex px-4">
          Retour à l&apos;accueil
        </Link>
      </Button>
    </>
  );
}
