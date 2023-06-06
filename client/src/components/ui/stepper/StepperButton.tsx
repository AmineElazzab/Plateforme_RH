import Image from 'next/image';

type StepperButtonProps = {
	number: number
	title: string
	isActive: boolean
	isCurrent: boolean
	className?: string
}

const StepperButton = ({ number, title, className, isActive, isCurrent }: StepperButtonProps) => {
	let buttonStyles = 'bg-gray-200 text-gray-600 scale-90';
	let titleStyles = 'text-slate-400 scale-90';

	if (isCurrent) {
		buttonStyles = 'bg-sam-green-500 text-white scale-100 delay-[0.3s] transition duration-200';
		titleStyles = 'text-sam-green-600 scale-100 delay-[0.3s] transition duration-200'
	} else if (isActive) {
		buttonStyles = 'bg-sam-green-200 text-white scale-90 delay-[0.3s] transition duration-200';
		titleStyles = 'text-sam-green-600 scale-90 delay-[0.3s] transition duration-200'
	}

	return (
		<div className={`${isActive ? 'cursor-pointer' : 'cursor-default'} w-12 h-12`}>
			<a
				className={`flex justify-center items-center w-12 h-12 rounded-full text-lg ${buttonStyles}`}>
				{number + 1}
			</a>
			<div className={`pl-0.5 pt-0.5 whitespace-nowrap text-sm ${titleStyles}`}>
				{title}
			</div>
		</div>
	);
};

export default StepperButton;