import styles from '../../styles/Home.module.css'
import { Card, Image } from 'semantic-ui-react'

export default function ArticleCard(props) {

    return (
    <>
    <div className={styles.articleCard}>
      <Card href={props.link} className={styles.articleCard} raised fluid>
        <Image className={styles.articleImage} src={props.image} />
        <Card.Content><Image avatar={true} floated="right" className={styles.editorImage} src={props.editorImage} /></Card.Content>
        <Card.Content header={props.title} />
        <Card.Content meta={props.editor + ' - ' + props.date} />
      </Card>
      </div>
    </>
  )
}
