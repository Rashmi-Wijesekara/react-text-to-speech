import React, { useState } from "react";

export type ReadoutContextType = {
	active: boolean;
	changeActive: () => void;
}

export const ReadoutContext = React.createContext<ReadoutContextType | null>(null);

interface Props {
	children: React.ReactNode;
}

const ReadoutProvider: React.FC<Props> = ({ children }) => {
	const [active, setActive] = useState<boolean>(false)

	const changeActive = () => {
		setActive(!active)
	}

	return (
		<ReadoutContext.Provider value={{
			changeActive,
			active
		}}>
			{children}
		</ReadoutContext.Provider>
	)
}

export default ReadoutProvider
