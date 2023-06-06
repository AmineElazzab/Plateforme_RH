import React from 'react'

function LoadingIndicator({ bigHeight = true, small = false }: { bigHeight?: boolean, small?: boolean }) {
	const classForHeight = bigHeight ? 'h-screen' : ''
	const smallIndicatorClass = small ? 'w-5 h-5' : 'w-10 h-10'
	return (
		<div className={`py-4 px-8 ${classForHeight}`}>
			<svg className={`${smallIndicatorClass} text-sam-green-600`} version="1.1" id="L4" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
				viewBox="0 0 100 100" enableBackground="new 0 0 0 0" xmlSpace="preserve">
				<circle fill="currentColor" stroke="none" cx="6" cy="50" r="6">
					<animate
						attributeName="opacity"
						dur="1s"
						values="0;1;0"
						repeatCount="indefinite"
						begin="0.1" />
				</circle>
				<circle fill="currentColor" stroke="none" cx="26" cy="50" r="6">
					<animate
						attributeName="opacity"
						dur="1s"
						values="0;1;0"
						repeatCount="indefinite"
						begin="0.2" />
				</circle>
				<circle fill="currentColor" stroke="none" cx="46" cy="50" r="6">
					<animate
						attributeName="opacity"
						dur="1s"
						values="0;1;0"
						repeatCount="indefinite"
						begin="0.3" />
				</circle>
			</svg>
		</div>
	)
}

export default LoadingIndicator