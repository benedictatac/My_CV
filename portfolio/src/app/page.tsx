import Navbar from "../../components/navbar";
import styles from "../../styles/globals.css"
export {default as NavBar} from "../../components/navbar";


export default function Home() {
  return (
    <div className="main-page flex flex-col h-screen">
      <Navbar/>
      <main className={`${styles.main} flex-grow`}>
      </main>
    </div>
  );
}
