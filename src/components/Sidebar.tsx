import { Avatar } from "./Avatar";
import styles from "./Sidebar.module.css";
import { PencilSimpleLine } from "@phosphor-icons/react";

export function Sidebar() {
  return (
    <>
      <aside className={styles.sidebar}>
        <img
          className={styles.cover}
          src="https://images.unsplash.com/photo-1605379399843-5870eea9b74e?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />

        <div className={styles.profile}>
          <Avatar
            hasborder
            src="https://images.unsplash.com/photo-1695982207250-8ab2901d575d?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />

          <strong>Fernando Mafra</strong>
          <span>Web Developer</span>
        </div>

        <footer>
          <a href="#">
            <PencilSimpleLine size={20} />
            Editar seu perfil
          </a>
        </footer>
      </aside>
    </>
  );
}
