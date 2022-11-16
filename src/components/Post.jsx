import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post () {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar 
            src="https://pps.whatsapp.net/v/t61.24694-24/304108440_812455839957331_6332990862066502429_n.jpg?ccb=11-4&oh=01_AdQFxhBWSotKYT0mB2rkArsbMlEQWGwxYm97ktfvNLy4dA&oe=6377AB6B"
          />
          <div className={styles.authorInfo}>
            <strong>Rodrigo Strapazzon</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="08 de Novembro ás 15:00" dateTime="2022-11-08 15:00:00">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
          <p>Fala galeraa  </p>
          <p>👋 Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀  </p>
          <p>👉 {' '} <a href=""> jane.design/doctorcare </a> </p>
          <p> 
            <a href="">#novoprojeto </a> {' '}
            <a href="">#nlw </a> {' '}
            <a href="">#rocketseat </a>  
          </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea 
          placeholder='Deixe um comentário'
        />

        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}