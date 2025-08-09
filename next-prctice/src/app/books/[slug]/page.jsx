import { getBookById, getBooks } from "@/services/booksApi";

export async function generateStaticParams() {
  const books = await getBooks();

  return books.map((book) => ({ id: book.id.toString() }));
}

export async function generateMetadata({ params }) {
  const book = await getBookById(params.id);
  return {
    title: `${book.title}`,
  };
}

export default async function singlePage({ params }) {
  const book = await getBookById(params.id);
  console.log(book);
  return (
    <div>
      <p>{book.authors}fbf</p>
      <p>نویسنده:</p>
      <p>ژانر:{book.genre_list}</p>
    </div>
  );
}
