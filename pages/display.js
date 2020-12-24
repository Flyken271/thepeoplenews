import styles from '../styles/Home.module.css'
import React, {useEffect, useState } from 'react'
import ArticleCard from '../components/articleCard'
import { firebase } from '../components/firebase'

function Display( props ) {

  var articles = props.articles; //.map(item=>{return item});

  //console.log(articles);

  return (
    <>
      <div className={"row "+styles.display}>
          {
            //<ArticleCard image="https://static01.nyt.com/images/2020/12/12/nyregion/11nytrump-vance1/11nytrump-vance1-superJumbo.jpg" title={item.title} content={item.content} editor={{display_name: item.editor}} />
            articles?.map((item, index)=>{
              let timeDate = item.timestamp.split(' ')
              let formatDate = timeDate[1] + " " + timeDate[2] + " " + timeDate[3]
              return (
                <ArticleCard key={item.id} link={item.id} editorImage={item.editorImage} date={formatDate} image={item.image} title={item.title} content={item.content} editor={item.editor} />
              )
            })
          }
      </div>
    </>
  );
}

export default Display;