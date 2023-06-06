import React from "react";

interface LabelProps {
	title?: string;
	labelClasses?: string
	htmlFor?: string;
}

const Label: React.FC<LabelProps> = ({ htmlFor, title, labelClasses = 'text-[13px] font-semibold' }) => {
	if (!title) return <></>;
	return (
		<label className={labelClasses} htmlFor={htmlFor}>
			{title}
		</label>
	);
};

export default Label;
