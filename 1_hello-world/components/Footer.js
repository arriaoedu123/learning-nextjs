import Link from "next/link";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Aprendendo Next.js - &copy;Todos os direitos não reservados - 2022</p>
    </footer>
  );
}
