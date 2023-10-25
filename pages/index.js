import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <h1>Lords of the Rings App</h1>
      <Link href="/volumes">All Volumes</Link>
    </>
  );
}
