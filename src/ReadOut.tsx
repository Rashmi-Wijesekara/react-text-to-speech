import React, { ReactNode, useContext, useState, useEffect } from 'react'
import { ReadoutContext, ReadoutContextType } from './readoutContext';

export type ReadOutProps = {
	children: ReactNode;
	text: string;
	as: Element;
}

export default function ReadOut(props: any) {
	const { as: Element, children, text, className } = props
	const { active } = useContext(ReadoutContext) as ReadoutContextType

	const synth = window.speechSynthesis;
	const utterance = new SpeechSynthesisUtterance(text);

	const readout_handler = () => {
		if (active) synth.speak(utterance)
	}

	const pause_reading = () => {
		if (active) synth.cancel()
	}

	// end of given text speech
	utterance.addEventListener('end', (evt) => {
		console.log(text)

	})
	
	return active ? (
		<Element
			className={`w-fit ${className} readout`}
			onMouseOver={readout_handler}
			onMouseOut={pause_reading}
		>
			{children}
		</Element>
	) : (
			<Element
				className={`w-fit ${className}`}
			>
				{children}
			</Element>
	)
}

ReadOut.defaultProps = {
	as: 'div',
	className: ''
}
