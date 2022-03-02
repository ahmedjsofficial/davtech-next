import { ThemeProvider } from "next-themes";
import Layout from "../Layout/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider
        defaultTheme={"system"}
        enableSystem={"false"}
        attribute={"class"}
        enableColorScheme={"true"}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
