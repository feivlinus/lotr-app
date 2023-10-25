import Link from "next/link";
import { volumes } from "@/resources/lib/data";
import Image from "next/image";

import { useRouter } from "next/router";

export default function TheFellowshipOfTheRing() {
  const bookInfo = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );

  const router = useRouter();

  return (
    <>
      <Link href="/volumes">return to all books</Link>
      <h1>{bookInfo.title}</h1>
      <p>{bookInfo.description}</p>
      <ul>
        {bookInfo.books.map((book) => (
          <li key={book.ordinal}>
            {book.ordinal}: {book.title}
          </li>
        ))}
      </ul>
      <Image
        src={bookInfo.cover}
        width={140}
        height={230}
        alt="The fellowship of the ring book cover"
      ></Image>
      <br />
      <button
        onClick={() => {
          router.push("/volumes/the-two-towers");
        }}
      >
        Next
      </button>
    </>
  );
}
