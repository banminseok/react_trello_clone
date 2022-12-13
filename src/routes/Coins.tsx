import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

function Coins() {
  return (
    <Container>
      <h1>Coins</h1>
      <Link to={`/${"test"}`}
        state={{ name: "name" }}>
        &rarr; Coin
      </Link>
    </Container>
  );
}

export default Coins;