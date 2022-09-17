import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";

import './global.css';
import styles from './App.module.css';

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus commodi porro quidem dolore eum nobis accusantium, animi hic ipsam! Odit aut suscipit perferendis consequatur soluta doloribus distinctio quae, qui eligendi!</p>
        </main>

      </div>
    </div>
    


  )
}
