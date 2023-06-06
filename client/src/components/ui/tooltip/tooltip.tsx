import { Tooltip } from 'react-tooltip'
type Props = {
	id: string;
	content: string;

};
const TooltipWidget = ({
	id,
	content,
}: Props) => {
	// return (<></>);

	return (
	
		<Tooltip anchorSelect={id} place='bottom'>
			{content}
		</Tooltip>
	
	);
};

export default TooltipWidget;
