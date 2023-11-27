import { createContext, useEffect, useState } from "react";
import { IBook, ICart } from "./interfaces";
import axios from "axios";

interface IAppContext {
	userName: string;
	setUserName: (userName: string) => void;
	books: IBook[];
	setBooks: (books: IBook[]) => void;
	cart: ICart;
	handleAddBookToCart: (book: IBook) => void;
}

interface IAppProvider {
	children: React.ReactNode;
}

const booksUrl = "https://edwardtanguay.vercel.app/share/techBooks.json";

export const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
	const [userName, setUserName] = useState("");
	const [books, setBooks] = useState<IBook[]>([]);
	const [cart] = useState<ICart>({items:[]} as ICart);

	useEffect(() => {
		(async () => {
			const response = await axios.get(booksUrl);
			const _books = response.data;
			setBooks(_books);
		})();
	}, []);

	const handleAddBookToCart = (book: IBook) => {
		cart.items.push(book);
		console.log(cart);
	};

	return (
		<AppContext.Provider
			value={{
				userName,
				setUserName,
				books,
				setBooks,
				cart,
				handleAddBookToCart,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
