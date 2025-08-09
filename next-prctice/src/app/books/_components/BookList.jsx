import { getBooks } from "@/services/booksApi";
import Link from "next/link";

export default async function BookList() {
  const data = await getBooks();
  console.log(data);
  return (
    <div>
      {data?.map((i) => (
        <Link>
          <h2 key={i.id} className="text-white">
            {i.title}
          </h2>
        </Link>
      ))}
    </div>
  );
}
