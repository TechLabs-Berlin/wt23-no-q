import Head from "next/head";
<<<<<<< HEAD
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });
=======
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/navbar";
>>>>>>> f2e6154c0727a0754d71e78c4bedbdc65ac6f6d8

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}></main>
    </>
  );
}
