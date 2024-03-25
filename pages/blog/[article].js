export default function article(props) {
  //   console.log(props);

  const articles = props.articles;

  return (
    <div className="container px-4 pt-5">
      <h1 className="text-center mb-4">{articles.title}</h1>
      <p>{articles.body}</p>
    </div>
  );
}

// on récupère les données de l'article en fonction de l'id et on les passe en props
// context contient les paramètres de la page
export async function getStaticProps(context) {
  const id = context.params.article;
  const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const articles = await data.json();

  return {
    props: {
      articles,
    },
  };
}

// Fonction qui récupère les chemins de toutes les pages dynamiques
export async function getStaticPaths() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const articles = await data.json();

  // on crée un tableau de chemins en utilisant les id des articles
  const paths = articles.map((article) => {
    return {
      params: { article: article.id.toString() },
    };
  });

  // on renvoie les chemins dans un objet
  return {
    paths,
    fallback: false, // Si le chamin n'est pas dans la liste, on renvoie une 404
  };
}
