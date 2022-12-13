import { Outlet } from "react-router-dom";
import { ReactQueryDevtools } from "react-query/devtools";
import { HelmetProvider } from "react-helmet-async";
import { darkTheme, lightTheme } from './theme';
import { useRecoilValue } from "recoil";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { isDarkAtom } from "./atom";
import ToggleBtn from "./components/ToggleBtn";
import GlobalStyle from "./components/GlobalStyle";

const Container = styled.div`
  padding: 10px 20px;
  max-width: 520px;
  margin: 0 auto;
`;

const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 30px;
  left: 30px;
`;
function App() {
  const isDark = useRecoilValue(isDarkAtom);
  return (
    <>
      <HelmetProvider >
        <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
          <GlobalStyle />
          <BtnContainer>
            <ToggleBtn />
          </BtnContainer>
          <Container>
            <Outlet />
          </Container>
          {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        </ThemeProvider>
      </HelmetProvider>
    </>
  );
}

export default App;