import { ReactNode } from 'react';

type StepContainerProps = {
  title?: string;
  children: ReactNode;
};

const StepContainer = ({ children }: StepContainerProps) => {
  return <div className="pt-12 max-w-screen-lg mx-auto">{children}</div>;
};

export default StepContainer;
