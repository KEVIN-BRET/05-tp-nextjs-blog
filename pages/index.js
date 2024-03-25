import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="container px-4 pt-5">
      <h1>Bienvenue sur Code.io</h1>
      <span>Le blog communautaire des afficionados de développement Web</span>

      <div className="row mt-5">
        
        <div className="col-12 col-sm-6" style={{minHeight: "200px"}}>
          <div className="card w-100 h-100">
            <div className="card-body">
              <h5 className="card-title">Lisez les articles</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                Maximisez votre culture web
              </h6>
              <p className="card-text">
                Chaque auteur tente de vous apporter le plus de valeur possible
                par article.
              </p>
              <Link href="/blog">Visitez le blog</Link>
            </div>
          </div>
        </div>
        
        <div className="col-12 col-sm-6" style={{minHeight: "200px"}}>
          <div className="card w-100 h-100">
            <div className="card-body">
              <h5 className="card-title">Faites un tour vers la liste de membres</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                Rencontrez des devs
              </h6>
              <p className="card-text">
                Ajoutez, invitez et discutez avec differents membres.
              </p>
              <Link href="/utilisateurs">Decouvrir la liste des membres.</Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
