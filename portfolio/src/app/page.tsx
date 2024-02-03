import styles from "../styles/page.module.css";
import NavBar from "../../components/navbar";


export default function Home() {
  return (
    <div className="main-page flex flex-col h-screen">
      <NavBar />
      <main className={`${styles.main} flex-grow`}>
      </main>
    </div>
  );
}
