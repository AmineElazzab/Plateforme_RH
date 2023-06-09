import { ReactNode } from 'react';
import { cn } from '~utils/utils';

type ContainerProps = {
    backgroundColor?: string;
    padding?: string;
    borderRadius?: string;
    className?: string;
    children: ReactNode;
};

const Container = ({
    children,
    backgroundColor = 'bg-white',
    // padding = 'p-4',
    // borderRadius = 'rounded-md',
    className = '',
}: ContainerProps) => {
    return (
        <div
            className={cn(
                `${backgroundColor}  ${className}`,
            )}
        >
            {children}
        </div>
    );
};

export default Container;
