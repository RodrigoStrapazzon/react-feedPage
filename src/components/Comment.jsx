import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment({content, onDeleteComment}) {
    function handleDeleteCommet() {
        onDeleteComment(content);
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/RodrigoStrapazzon.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Diego Fernandes</strong>
                            <time title="08 de Novembro ás 15:00" dateTime="2022-11-08 15:00:00">
                            Cerca de 1h atrás
                            </time>
                        </div>

                        <button onClick={handleDeleteCommet} title='Deletar comentário'>
                            <Trash size={20} />
                            
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>


        </div>
    )
}