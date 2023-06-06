import StepperButton from './StepperButton';
import StepperBar from '~components/ui/stepper/StepperBar';
import React, { Children, Fragment, ReactNode } from 'react';

type StepperProps = {
	steps: {
		number: number;
		title: string;
		isActive: boolean;
		isCurrent: boolean;
		barStatus: string;
	}[];
	className: string;
	children: ReactNode;
};

const Stepper = ({ steps, className, children }: StepperProps) => {
	return (
		<>
			<div
				className={`flex bg-white z-50 w-[100%] justify-between items-center max-w-screen-lg ${className} pt-4 text-center`}
			>
				{steps.map((step, index) => {
					return (
						<Fragment key={step.number}>
							<StepperButton
								number={step.number}
								title={step.title}
								isActive={step.isActive}
								isCurrent={step.isCurrent}
							/>
							{!(index === steps.length - 1) && (
								<StepperBar barStatus={step.barStatus} />
							)}
						</Fragment>
					);
				})}
			</div>

			{Children.map(children, (element, index) =>
				index === steps.map((step) => step.isCurrent).indexOf(true)
					? element
					: null
			)}
		</>
	);
};

export default Stepper;
