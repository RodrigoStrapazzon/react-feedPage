import { PencilLine } from 'phosphor-react' ;
import { Avatar } from './Avatar';

import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
        alt=""
      />
      <div className={styles.profile}>
        <Avatar src="https://pps.whatsapp.net/v/t61.24694-24/304108440_812455839957331_6332990862066502429_n.jpg?ccb=11-4&oh=01_AdQFxhBWSotKYT0mB2rkArsbMlEQWGwxYm97ktfvNLy4dA&oe=6377AB6B" />
        <strong>Rodrigo Strapazzon</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}