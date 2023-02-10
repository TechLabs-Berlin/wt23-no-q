import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  return (
    <>
      <nav className={styles.navbar}>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <button>
              <Link href="/home">to Home</Link>
            </button>
          </li>
          <li className={styles.li}>
            <button>
              <Link href="/account">to Account</Link>
            </button>
          </li>
          <li className={styles.li}>
            <button>
              <Link href="/settings">to Settings </Link>
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}
