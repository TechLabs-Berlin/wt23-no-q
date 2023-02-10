import Navbar from "./navbar";

export default function Layout({ children }) {
  return (
    <>
      <main>{children}</main>
      <Navbar />
    </>
  );
}
