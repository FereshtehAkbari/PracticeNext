import Link from "next/link";
import SimpleForm from "./books/_components/Tamrin";

function Home() {
  return (
    <div>
      <h1>Main Page</h1>
      <Link href="/books">Books Page</Link>
      <SimpleForm />
    </div>
  );
}

export default Home;
