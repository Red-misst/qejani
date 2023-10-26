import Layout from "@/components/layout";
import { SessionProvider } from "next-auth/react";
import {useEffect} from "react"
import "@/styles/globals.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Head from "next/head";
 
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  useEffect(() => {
    // Set the viewport meta tag in your _app.js
    const viewport = document.querySelector("meta[name=viewport]");
    viewport.setAttribute("content", "width=device-width, initial-scale=1.0, minimum-scale=1.0");
  }, []);
  return (<>
    <Head>
        <title>Qejani </title> {/* Set your title here */}
        <meta name="description" content="Blog app" />
      </Head>
    <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
    </>
  );
}
