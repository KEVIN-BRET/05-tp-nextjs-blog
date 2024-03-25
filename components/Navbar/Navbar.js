import React from "react";
import Link from "next/link";
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <Link href="/">Accueil</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/liste">Liste</Link>
    </div>
  );
}
