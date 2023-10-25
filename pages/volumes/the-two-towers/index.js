import Link from "next/link";
import { volumes } from "@/resources/lib/data";
import Image from "next/image";

import { useRouter } from "next/router";

export default function TheTwoTowers() {
  const bookInfo = volumes.find(({ slug }) => slug === "the-two-towers");

  const router = useRouter();

  return (
    <>
      <Link href="/volumes">return to all books</Link>
      <h1>{bookInfo.title}</h1>
      <p>{bookInfo.description}</p>
      <ul>
        {bookInfo.books.map((book) => (
          <li key={bookInfo.title}>
            {book.ordinal}: {book.title}
          </li>
        ))}
      </ul>
      <Image
        src={bookInfo.cover}
        width={140}
        height={230}
        alt="The two towers book cover"
      />
      <br />
      <button onClick={() => router.back()}>Previous</button>
      <button onClick={() => router.push("/volumes/the-return-of-the-king")}>
        Next
      </button>
    </>
  );
}
