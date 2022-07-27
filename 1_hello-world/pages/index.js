import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Página principal</title>
      </Head>
      <div>
        <h1 className={styles.title}>Hello World Next.js</h1>
        <Image
          src="/images/city.jpg"
          alt="Imagem a noite"
          width={400}
          height={500}
        />
      </div>
    </>
  );
}
