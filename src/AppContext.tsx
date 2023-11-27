import { createContext, useEffect, useState } from "react";
import { IBook } from "./interfaces";
import axios from "axios";

interface IAppContext {
	userName: string;
	setUserName: (userName: string) => void;
	books: IBook[];
	setBooks: (books: IBook[]) => void;
}

interface IAppProvider {
	children: React.ReactNode;
}

const booksUrl = 'https://edwardtanguay.vercel.app/share/techBooks.json';

export const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
	const [userName, setUserName] = useState("");
	const [books, setBooks] = useState<IBook[]>([]);

	useEffect(() => {
		(async () => {
			const response = await axios.get(booksUrl);
			const _books = response.data;
			setBooks(_books);
		})();
	}, []);

	(async () => {
		
	})();

	return (
		<AppContext.Provider
			value={{
				userName,
				setUserName,
				books,
				setBooks
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
