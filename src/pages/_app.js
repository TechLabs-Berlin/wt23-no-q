<<<<<<< HEAD
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
=======
import "@/styles/globals.css";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
>>>>>>> f2e6154c0727a0754d71e78c4bedbdc65ac6f6d8
}
