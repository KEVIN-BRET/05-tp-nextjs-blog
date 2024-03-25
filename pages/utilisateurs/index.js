import Link from "next/link";
import { v4 as uuidv4 } from "uuid";

export default function index(props) {
  console.log(props);

  const users = props.users;

  return (
    <div className="container px-4 pt-5">
      <h1 className="text-center">La liste des utilisateurs :</h1>
      <div className="row justify-content-center mt-5">
        {users.map((user) => (
          <div key={uuidv4()} className="col-12 col-lg-6 m-2">
            <div className="card">
            <div className="card-body d-flex justify-content-between">
              <h5 className="card-title">{user.username}</h5>
              <Link href={`/utilisateurs/${user.id}`}><span className="ml-auto card-link">Contacter</span></Link>
            </div>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// on importe des données et on les passe en props
export async function getStaticProps() {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await data.json();

  return {
    props: {
      users,
    },
  };
}
