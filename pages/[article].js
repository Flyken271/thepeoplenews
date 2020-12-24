import styles from '../styles/Home.module.css'
import { Image, Card, Grid, Container } from 'semantic-ui-react'
import { firebase } from './components/firebase'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { useEffect, useState } from 'react'
import showdown from 'showdown'
import sanitizeHtml from 'sanitize-html';

export default function article() {
  const router = useRouter()
  const { article } = router.query
  const articlesRef = firebase.firestore().collection('articles')
  const query = articlesRef.orderBy('timestamp');
  const [articleSelected] = useCollectionData(query, {idField: 'id'});
  let curArticle = []
  let articleDate = []

  articleSelected?.map(item => {
    if(item.id == article){
      let timeDate = item.timestamp.split(' ')
      let formatDate = timeDate[1] + " " + timeDate[2] + " " + timeDate[3]
      curArticle.push(item);
      articleDate.push(formatDate)
    }
  })

  var converter = new showdown.Converter(),
    text      = curArticle[0]?.content,
    html      = converter.makeHtml(text);

    function createMarkup(){
      return {__html: sanitizeHtml(html)}
    }

  return (
    <>
    <Head>
      <title>{curArticle[0]?.title}</title>
      <meta property="og:title" content={curArticle[0]?.title} key="title" />
    </Head>
      <div key={curArticle[0]?.id} className={styles.displayCard}>
      <Card className={styles.pageCard}>
        <Image className={styles.pageImage} src={curArticle[0]?.image} />
        <Card.Content className={styles.articleHeader} header={curArticle[0]?.title} />
        <Card.Content>
          <Container className={styles.articleContent} textAlign="left">
            <div dangerouslySetInnerHTML={createMarkup()} />
          </Container>
        </Card.Content>
        <Card.Content meta={curArticle[0]?.editor + ' - ' + articleDate} />
      </Card>
    </div>
    </>
  )
}
