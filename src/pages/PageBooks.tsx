import { useContext } from "react";
import { AppContext } from "../AppContext";

export const PageBooks = () => {
	const { userName } = useContext(AppContext);
	return (
		<>{userName && <p>Hallo, {userName}, please select your books!</p>}</>
	);
};
