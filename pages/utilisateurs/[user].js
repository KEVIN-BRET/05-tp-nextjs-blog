import React from "react";

export default function user(props) {
  console.log(props);

  return (
    <div className="container px-4 pt-3">
      <h2 className="text-center mb-4">
        Nom d'utilisateur : {props.user.name}
      </h2>
      <div className="row justify-content-center">
        <div className="col-12 col-lg-8 col-xl-6">
          <div className="card p-2">
            <div className="car-body">
              <h4 className="card-title">{props.user.name}</h4>
              <h5 className="card-subtitle mb-2 text-muted">
                Username : {props.user.username}
              </h5>
              <ul className="list-group">
                <li className="list-group-item">Email : {props.user.email}</li>
                <li className="list-group-item">Site Web : {props.user.website}</li>
                <li className="list-group-item">Téléphone : {props.user.phone}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  const id = context.params.user;
  const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await data.json();

  return {
    props: {
      user,
    },
  };
}

// Fonction qui récupère les chemins de toutes les pages dynamiques
export async function getStaticPaths() {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await data.json();

  // on crée un tableau de chemins en utilisant les id des users
  const paths = users.map((item) => {
    return {
      params: { user: item.id.toString() },
    };
  });

  // on renvoie les chemins dans un objet
  return {
    paths,
    fallback: false, // Si le chamin n'est pas dans la liste, on renvoie une 404
  };
}
