import { useContext } from "react";
import { AppContext } from "../AppContext";

export const PageBooks = () => {
	const { userName, books, handleAddBookToCart } = useContext(AppContext);
	return (
		<>
			{userName && <p>Hallo, {userName}, please select your books!</p>}

			<p className="mb-4">There are {books.length} books.</p>

			<div className="flex gap-3 flex-wrap">
				{books.map((book) => {
					return (
						<img
							key={book.id}
							className="w-40 h-fit cursor-pointer"
							onClick={() => handleAddBookToCart(book)}
							src={`https://edwardtanguay.vercel.app/share/images/techBooks/${book.idCode}.jpg`}
						/>
					);
				})}
			</div>
		</>
	);
};
