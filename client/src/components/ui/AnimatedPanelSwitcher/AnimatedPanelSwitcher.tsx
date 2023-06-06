import React, { ReactElement } from 'react';
import { LayoutGroup, motion } from 'framer-motion'
import LoadingIndicator from '../LoadingIndicator/LoadingIndicator';

function AnimatedPanelSwitcher({ isLoaded = true, delay = .150, bigHeight = true, children }: { isLoaded?: boolean, delay?: number, bigHeight?: boolean, children: ReactElement }) {

	return (
		<>
			<LayoutGroup id="a">
				{
					isLoaded && <motion.main
						className="flex-1"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ type: 'tween', delay }}
						exit={{ opacity: 0 }}>
						{children}
					</motion.main>
				}
			</LayoutGroup>
			<LayoutGroup id="b">
				{
					!isLoaded && <motion.main
						className='flex-1'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ type: 'tween', delay: .1 }}
						exit={{ opacity: 0 }}>
						<LoadingIndicator bigHeight={bigHeight} />
					</motion.main>}
			</LayoutGroup>
		</>
	)
}

export default AnimatedPanelSwitcher