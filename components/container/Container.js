import Link from "next/link";
import { Children } from "react";

export default function Container({children}) {
  return (
    <>
      <nav className="navbar navbar-dark bg-primary">
        <div className="container-fluid justify-content-center">
          <Link href="/">
            <span className="navbar-brand mx-4">Accueil</span>
          </Link>
          <Link href="/blog">
            <span className="navbar-brand mx-4">Blog</span>
          </Link>
          <Link href="/utilisateurs">
            <span className="navbar-brand mx-4">Liste</span>
          </Link>
        </div>
      </nav>

      {children}
    </>
  );
}
