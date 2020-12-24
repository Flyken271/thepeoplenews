import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Display from './display'
import firebase from '../components/firebase'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import Article from './[article]'

export default function Home(props) {

  const articlesRef = firebase.firestore().collection('articles')
  const query = articlesRef.orderBy('timestamp');
  const [article] = useCollectionData(query, {idField: 'id'});

  //console.log(article);

  return (
    
    <div className={styles.container}>
      <Head>
        <title>The People</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </Head>
      <main className={styles.main}>
        <Display articles={article} />
      </main>

      
    </div>
  )
}