import Link from "next/link";
import { introduction } from "@/resources/lib/data";

export default function Volumes() {
  return (
    <>
      <h2>All volumes</h2>

      <p>{introduction}</p>

      <ul>
        <li>
          <Link href="/volumes/the-fellowship-of-the-ring">1. Book</Link>
        </li>
        <li>
          <Link href="/volumes/the-two-towers">2. Book</Link>
        </li>
        <li>
          <Link href="/volumes/the-return-of-the-king">3. Book</Link>
        </li>
      </ul>
    </>
  );
}
