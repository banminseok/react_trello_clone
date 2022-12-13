import { Link, Outlet, useMatch, useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 25px 0px;
  gap: 10px;
`;

const Tab = styled.span<{ isActive: boolean }>`
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 400;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 7px 0px;
  border-radius: 10px;
  color: ${(props) =>
    props.isActive ? props.theme.accentColor : props.theme.textColor};
  a {
    display: block;
  }
`;

type RouteParams = {
  coinId: string;
}

function Coin() {
  const { coinId } = useParams() as RouteParams;
  const priceMatch = useMatch("/:coinId/price");
  const chartMatch = useMatch("/:coinId/chart");
  return (
    <Container>
      <h1>Coin</h1>
      <div>
        <Link to={`/`}>&larr;뒤로가기</Link>
      </div>
      <hr />
      <Tabs>
        <Tab isActive={chartMatch !== null}>
          <Link to="./chart">Chart</Link>
        </Tab>
        <Tab isActive={priceMatch !== null}>
          <Link to="./price">Price</Link>
        </Tab>
      </Tabs>
      <Outlet context={{ coinId }} />
    </Container>
  );
}

export default Coin;