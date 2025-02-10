import "../styles/globals.css"; // Ensure global styles are imported here
import type { AppProps } from "next/app";
import "../pages/animations/PreLoader/preloader.css";
import "../pages/animations/animate.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
