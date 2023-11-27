import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
	const [userName] = useState("Hans");

	return (
		<AppContext.Provider
			value={{
				userName,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
