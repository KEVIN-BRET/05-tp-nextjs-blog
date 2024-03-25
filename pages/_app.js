import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Container from "../components/container/Container";

export default function App({ Component, pageProps }) {
  return (
    <Container>
      <Component {...pageProps} />
    </Container>
  );
}
