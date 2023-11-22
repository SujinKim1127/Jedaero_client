import Header from "@/components/organisms/Header";
import "@/styles/globals.css";
import { ThemeProvider, createTheme } from "@mui/material";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import styled from "@emotion/styled";
import { css, Global } from "@emotion/react";
import LoginModal from "@/components/organisms/Modal";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <RecoilRoot>
          <Global styles={globalStyles} />
          <PageLayout>
            <Header />
            <LoginModal />
            <MainContent>
              <Component {...pageProps} />
            </MainContent>
          </PageLayout>
        </RecoilRoot>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

const theme = createTheme();

const globalStyles = css`
  html,
  body {
    padding: 0;
    margin: 0;
    line-height: 1.6;
    font-size: 18px;
    font-family: "Arial", sans-serif;
  }
  * {
    box-sizing: border-box;
    list-style: none;
  }
`;

const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;

`;
