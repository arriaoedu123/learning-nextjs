import Head from "next/head";
import Link from "next/link";

export default function About() {
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>
      <h1>This is the about page</h1>
      <Link href="/">
        <a>Voltar</a>
      </Link>
    </div>
  );
}
