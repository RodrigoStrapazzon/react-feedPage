import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/RodrigoStrapazzon.png',
      name: 'Rodrigo Strapazzon',
      role: 'Developer @Nebula',
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa'},
      {type: 'paragraph', content: '👋 Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-11-11 18:08:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/pedro-lucinda.png',
      name: 'Pedro Lucinda',
      role: 'CEO @Nebula',
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa'},
      {type: 'paragraph', content: '👋 Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-11-13 18:08:00'),
  },
];

export default function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(posts => {
            return (
              <Post 
                author={posts.author}
                content={posts.content}
                publishedAt={posts.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  );
}
