import { fontWeight } from 'html2canvas/dist/types/css/property-descriptors/font-weight';
import React from 'react'
import Select from 'react-select';
import { StateManagerProps } from 'react-select/dist/declarations/src/stateManager';

/*
	//The following components are customisable and switchable:

	ClearIndicator
	Control
	DropdownIndicator
	DownChevron
	CrossIcon
	Group
	GroupHeading
	IndicatorsContainer
	IndicatorSeparator
	Input
	LoadingIndicator
	Menu
	MenuList
	MenuPortal
	LoadingMessage
	NoOptionsMessage
	MultiValue
	MultiValueContainer
	MultiValueLabel
	MultiValueRemove
	Option
	Placeholder
	SelectContainer
	SingleValue
	ValueContainer
	
*/
function SamSelect(props: StateManagerProps) {

	const customStyles = {
		control: (defaultStyles: any, state: any) => ({
			...defaultStyles,
			backgroundColor: "#fff",
			borderRadius: '5px',
			boxShadow: "none",
			"&:focus-within": {
				borderColor: "#38deb3",
				boxShadow: "0 0 0.2rem #cdf7ec",
			},
			outline: state.isFocused ? 'red' : 'white'
		}),
		option: (defaultStyles: any, state: any) => ({
			...defaultStyles,
			// color: state.isSelected ? '#048060' : '',
			color: '#022639',
			backgroundColor: '#fff',
			fontWeight: '500',
			"&:active": {
				backgroundColor: '#ddd'
			},
			"&:hover": {
				backgroundColor: '#cdf7ec',
				cursor: 'pointer'
			},
		}),
		singleValue: (defaultStyles: any) => ({
			...defaultStyles,
			color: '#022639',
			fontWeight: '500'
		}),
		placeholder: (defaultStyles: any) => ({
			...defaultStyles,
			color: '#35596c',
		}),
	};

	return (
		<Select
			{...props}
			className='sam-select'
			styles={customStyles}
		/>
	);
}

export default SamSelect;