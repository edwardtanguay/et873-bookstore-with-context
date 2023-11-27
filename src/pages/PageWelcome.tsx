import { useContext } from "react";
import { AppContext } from "../AppContext";

export const PageWelcome = () => {
	const { userName } = useContext(AppContext);

	return (
		<>
			<p>Welcome, {userName}!</p>
			<div>
				<input className="p-2 rounded mt-3" type="text" /> <button>Add name</button>
			</div>
		</>
	);
};
